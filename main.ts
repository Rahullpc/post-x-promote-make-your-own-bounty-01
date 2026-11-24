// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, standard
// library only, no network): it copies POST.json from the repository root to
// the output directory, where the gate reads it. The entry itself is the X
// post named in POST.json; nothing this program writes about the post is
// scored.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

let post: unknown;
try {
  post = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const url = (post as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('POST.json is invalid: it must have a non-empty string field "url".');
  process.exit(1);
}
if (!url.startsWith('https://x.com/') || !url.includes('/status/')) {
  console.error(`POST.json is invalid: "url" must be an X post address (https://x.com/<handle>/status/<id>), got: ${url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const DEST_PATH = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(POST_PATH, DEST_PATH);
} catch (err) {
  console.error(`POST.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const { size } = statSync(DEST_PATH);
console.log(`POST.json copied (${size} bytes): ${url}`);
