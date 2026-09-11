#!/usr/bin/env node
/**
 * Wrapper around `changeset version` that enforces this repo's calendar
 * versioning scheme (`YYYY.MM.PATCH`).
 *
 * Wired in as the `version` input of changesets/action in deploy.yml, so it runs
 * on the runner when the "Version Packages" PR is generated — not on publish.
 *
 * Why this exists
 * ---------------
 * We deliberately mark API-version cuts as `major` changesets so the generated
 * CHANGELOG reads "Major Changes". But changesets feeds that bump type straight
 * into `semver.inc()`, and a semver major bump on a calendar version always
 * rolls the *year*:
 *
 *     semver.inc('2026.10.0-rc.1', 'major')  ->  '2027.0.0'
 *
 * (The "pre-major" shortcut that keeps `1.0.0-rc.0` at `1.0.0` only fires when
 * minor and patch are both 0 — our minor is the month, so it never fires.)
 *
 * That produced `2027.0.0-rc.1` on the 2026-10-rc release PR, which broke the
 * tester's api_version check. Had it reached npm it would have outranked every
 * subsequent 2026.x release permanently.
 *
 * Note that only `major` is hazardous on an RC branch: `minor` and `patch` are
 * no-ops there, because node-semver leaves minor alone when patch is 0 and a
 * prerelease is present.
 *
 * In this repo `YYYY.MM` is chosen by a human at RC-cut time. Changeset bump
 * types are changelog semantics only and must never move it. So: run
 * `changeset version` as normal, then re-pin `YYYY.MM` and keep whatever
 * patch/prerelease counter changesets calculated.
 */

import {execFileSync} from 'node:child_process';
import {readFileSync, writeFileSync, existsSync, readdirSync} from 'node:fs';
import path from 'node:path';

import semver from 'semver';

const ROOT = process.cwd();
const PACKAGES_DIR = path.join(ROOT, 'packages');
const PKG_DIRS = readdirSync(PACKAGES_DIR, {withFileTypes: true})
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(PACKAGES_DIR, entry.name))
  .filter((dir) => existsSync(path.join(dir, 'package.json')));

const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));
const manifestOf = (dir) => readJson(path.join(dir, 'package.json'));

/**
 * Neutralise any year/month movement introduced by a major (or, on a stable
 * branch, minor) changeset, keeping the patch/prerelease counter that
 * changesets calculated.
 */
function pinToCalendar(name, before, computed) {
  const prev = semver.parse(before);
  const next = semver.parse(computed);

  // Calendar segment untouched (normal patch bump) — nothing to do.
  if (next.major === prev.major && next.minor === prev.minor) return computed;

  const pre = next.prerelease.length ? `-${next.prerelease.join('.')}` : '';
  let pinned = `${prev.major}.${prev.minor}.${prev.patch}${pre}`;

  // Stable branch: no prerelease counter to advance, so move the patch instead.
  if (!semver.gt(pinned, before)) {
    pinned = `${prev.major}.${prev.minor}.${prev.patch + 1}${pre}`;
  }

  // Invariant: incrementing patch always outranks `before`, so this should be
  // unreachable. Kept as a guard so a future edit to the logic above can never
  // silently publish a version that moves backwards.
  if (!semver.gt(pinned, before)) {
    throw new Error(
      `Cannot pin ${name} to the calendar version: ${before} -> ${computed} ` +
        `would become ${pinned}, which is not a forward move. If you are cutting ` +
        `a new API version, set the package versions and .changeset/pre.json ` +
        `manually as part of the release commit.`,
    );
  }

  return pinned;
}

const before = new Map(PKG_DIRS.map((dir) => [dir, manifestOf(dir).version]));

execFileSync('yarn', ['changeset', 'version'], {stdio: 'inherit', cwd: ROOT});

// Work out which packages changesets moved off the calendar scheme.
const rewrites = new Map();
for (const dir of PKG_DIRS) {
  const {name, version: computed} = manifestOf(dir);
  if (computed === before.get(dir)) continue;
  const pinned = pinToCalendar(name, before.get(dir), computed);
  if (pinned !== computed) rewrites.set(computed, pinned);
}

if (rewrites.size > 0) {
  // Changesets writes the computed version into package.json versions, internal
  // dependency ranges, and CHANGELOG headings. A literal swap covers all three —
  // the computed strings are freshly generated and unique.
  const targets = PKG_DIRS.flatMap((dir) => [
    path.join(dir, 'package.json'),
    path.join(dir, 'CHANGELOG.md'),
  ]).filter(existsSync);

  for (const file of targets) {
    const original = readFileSync(file, 'utf8');
    let updated = original;
    for (const [computed, pinned] of rewrites) {
      updated = updated.split(computed).join(pinned);
    }
    if (updated !== original) writeFileSync(file, updated);
  }

  for (const [computed, pinned] of rewrites) {
    console.log(`calendar-version: re-pinned ${computed} -> ${pinned}`);
  }
} else {
  console.log('calendar-version: versions already follow YYYY.MM.PATCH');
}

// changesets writes pre.json with its own formatting, which trips the Prettier
// lint step whenever the `changesets` array is short enough to fit on one line.
if (existsSync(path.join(ROOT, '.changeset/pre.json'))) {
  execFileSync('yarn', ['prettier', '--write', '.changeset/pre.json'], {
    stdio: 'inherit',
    cwd: ROOT,
  });
}
