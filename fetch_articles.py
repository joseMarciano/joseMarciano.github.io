#!/usr/bin/env python3
"""Fetch articles from multiple sources and generate public/articles.json.

Sources:
  - Medium RSS
  - Dev.to RSS
  - articles-manual.json  (LinkedIn + any manual entries)

Manual entries take priority: if a title matches an auto-fetched article,
the auto-fetched version is dropped (manual link wins).

LinkedIn has no public feed, so LinkedIn posts are added by hand to
articles-manual.json using the same field shape as the entries below.
"""

import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

MEDIUM_FEED = "https://medium.com/feed/@marcianojosepaulo"
DEVTO_FEED = "https://dev.to/feed/marciaja"
MANUAL_FILE = Path(__file__).parent / "articles-manual.json"
OUTPUT = Path(__file__).parent / "public" / "articles.json"

# Titles excluded from articles.json (case-insensitive after normalizing).
EXCLUDED_TITLES: set[str] = set()


def fetch_rss(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode("utf-8")


def parse_rss(xml_text: str, source: str) -> list:
    root = ET.fromstring(xml_text)
    ns = {"content": "http://purl.org/rss/1.0/modules/content/"}
    items = []
    for item in root.findall(".//item"):
        title_el = item.find("title")
        link_el = item.find("link")
        pub_date_el = item.find("pubDate")
        desc_el = item.find("description")
        content_el = item.find("content:encoded", ns)
        tags = [cat.text for cat in item.findall("category") if cat.text]
        items.append({
            "title": (title_el.text or "").strip() if title_el is not None else "",
            "link": (link_el.text or "").strip() if link_el is not None else "",
            "pubDate": pub_date_el.text if pub_date_el is not None else "",
            "description": desc_el.text if desc_el is not None else "",
            "content": content_el.text if content_el is not None else "",
            "source": source,
            "tags": tags,
        })
    return items


def load_manual() -> list:
    if not MANUAL_FILE.exists():
        return []
    with MANUAL_FILE.open(encoding="utf-8") as f:
        return json.load(f)


def parse_date(pub_date: str) -> datetime:
    try:
        return parsedate_to_datetime(pub_date)
    except Exception:
        return datetime(1970, 1, 1, tzinfo=timezone.utc)


def normalize(title: str) -> str:
    title = title.replace("\u2018", "'").replace("\u2019", "'")
    title = title.replace("\u201c", '"').replace("\u201d", '"')
    title = title.replace("\u2013", "-").replace("\u2014", "-")
    return re.sub(r"\s+", " ", title.strip().lower())


def merge(manual: list, *rss_sources: list) -> list:
    manual_titles = {normalize(a["title"]) for a in manual}
    merged = list(manual)
    for source_articles in rss_sources:
        for article in source_articles:
            norm = normalize(article["title"])
            if norm in manual_titles or norm in EXCLUDED_TITLES:
                continue
            merged.append(article)
    merged.sort(key=lambda a: parse_date(a["pubDate"]), reverse=True)
    return merged


if __name__ == "__main__":
    errors = []

    manual = load_manual()
    print(f"Manual  : {len(manual)} articles")

    medium = []
    try:
        medium = parse_rss(fetch_rss(MEDIUM_FEED), source="medium")
        print(f"Medium  : {len(medium)} articles")
    except Exception as e:
        errors.append(f"Medium RSS failed: {e}")
        print(f"Medium  : FAILED ({e})", file=sys.stderr)

    devto = []
    try:
        devto = parse_rss(fetch_rss(DEVTO_FEED), source="devto")
        print(f"Dev.to  : {len(devto)} articles")
    except Exception as e:
        errors.append(f"Dev.to RSS failed: {e}")
        print(f"Dev.to  : FAILED ({e})", file=sys.stderr)

    merged = merge(manual, medium, devto)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(merged, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nSaved {len(merged)} articles to {OUTPUT}")
    for a in merged:
        print(f"  [{a['source']:8}] {a['title']}")

    if errors and not merged:
        sys.exit(1)
