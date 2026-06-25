# joseMarciano.github.io

Authority portfolio for **José Marciano** — Senior Software Engineer specializing in
high-concurrency, low-latency backend systems for **fintech**, with a focus on
**Golang performance**, distributed systems, and money-movement infrastructure.

Built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Design

A minimalist, dark engineering aesthetic — structured after
[fascari/fascari.github.io](https://github.com/fascari/fascari.github.io): restrained
type, a `label · title · hairline` section header, tabbed experience, and card sections.

- **Palette:** navy base `#0a1018`, teal `#38e2b0` (primary), amber `#ff9d54` (rare accent)
- **Type:** Inter (text) · IBM Plex Mono (micro-labels & data)
- **Sections:** Hero → About → Stack → Experience → Writing → Contact

## Local development

Requires **Node 22+** (see `.nvmrc`).

```bash
nvm use            # selects Node 22
npm install
npm run dev        # http://localhost:4321
```

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Build the static site to `dist/`     |
| `npm run preview` | Preview the production build locally |

## Editing content

All copy and data live in a single file: [`src/data/site.ts`](src/data/site.ts)
— profile, about, focus areas, highlights, stack, experience, and education.
Components in `src/components/` render from that model.

## Articles

The **Writing** section is populated at build/cron time, not hardcoded.

- [`fetch_articles.py`](fetch_articles.py) pulls posts from **Medium**
  (`@marcianojosepaulo`) and **dev.to** (`marciaja`) RSS, merges them with
  [`articles-manual.json`](articles-manual.json), and writes `public/articles.json`.
- [`src/components/Articles.astro`](src/components/Articles.astro) fetches that JSON
  client-side and renders the cards (with a skeleton loading state).
- [`.github/workflows/fetch-articles.yml`](.github/workflows/fetch-articles.yml) runs
  the script weekly (and on demand) and commits the refreshed JSON.

**LinkedIn** has no public feed, so LinkedIn posts are added by hand to
`articles-manual.json` (same field shape: `title`, `link`, `pubDate`, `description`,
`cover_image`, `source: "linkedin"`, `tags`). Regenerate locally with:

```bash
python3 fetch_articles.py
```

## Resume

The hero has a **Resume** download button linking to
`/resume/jose-marciano-resume.pdf`. Add the file at
`public/resume/jose-marciano-resume.pdf` (exact name) and it works automatically —
until then, the link 404s.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

**One-time setup:** in the repository, go to **Settings → Pages → Build and
deployment** and set the **Source** to **GitHub Actions**.

The site is served at https://josemarciano.github.io
