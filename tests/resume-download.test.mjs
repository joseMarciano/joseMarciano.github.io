import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { profile } from '../src/data/site.ts';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('the Resume link downloads a real PDF from the public directory', async () => {
  const pdf = await readFile(path.join(projectRoot, 'public', profile.resume));

  assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
  assert.ok(pdf.length > 30_000, 'resume PDF should contain the full document');
});
