import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

import {API_VERSION} from '../api-version';

export const TOML_NAME = 'shopify.extension.toml';

/**
 * Creates an isolated temp directory for a single test file.
 * Each test file gets its own directory so tests can run in parallel
 * without conflicting on the shared shopify.extension.toml file.
 *
 * The returned object provides `placeToml()` and `tearDown()` scoped
 * to the temp directory.
 */
export function createTestSandbox() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ui-ext-tester-'));

  // Copy the fixtures directory into the temp dir so module paths resolve
  const srcFixtures = path.resolve(__dirname, 'fixtures');
  const destFixtures = path.join(tempDir, 'fixtures');
  fs.mkdirSync(destFixtures, {recursive: true});
  for (const entry of fs.readdirSync(srcFixtures)) {
    fs.copyFileSync(
      path.join(srcFixtures, entry),
      path.join(destFixtures, entry),
    );
  }

  /**
   * Known directories where `placeToml()` may write a toml file,
   * scoped to this sandbox's temp directory tree.
   */
  const tomlDirs = {
    root: tempDir,
    subDir: path.join(tempDir, 'sub'),
    nestedSubDir: path.join(tempDir, 'sub', 'deep'),
  } as const;

  // Pre-create the subdirectories
  fs.mkdirSync(tomlDirs.nestedSubDir, {recursive: true});

  type TomlDirName = keyof typeof tomlDirs;

  function removeAllTomls() {
    for (const dir of Object.values(tomlDirs)) {
      try {
        fs.unlinkSync(path.join(dir, TOML_NAME));
      } catch {
        // ignore if file doesn't exist
      }
    }
  }

  function placeToml(
    params: MakeTomlOptions & {inDir?: TomlDirName} = {},
  ): void {
    const {inDir = 'root', ...options} = params;
    // Default module path is relative to the toml location → fixtures/
    if (!options.module) {
      const tomlDir = tomlDirs[inDir];
      const relToFixtures = path.relative(tomlDir, destFixtures);
      options.module = `./${relToFixtures}/test-module.ts`;
    }
    fs.writeFileSync(path.join(tomlDirs[inDir], TOML_NAME), makeToml(options));
  }

  function tearDown() {
    removeAllTomls();
    delete (globalThis as any).shopify;
    delete (globalThis as any).fetch;
  }

  function destroy() {
    tearDown();
    rmdirRecursive(tempDir);
  }

  return {tempDir, tomlDirs, placeToml, tearDown, destroy};
}

export type TestSandbox = ReturnType<typeof createTestSandbox>;

function rmdirRecursive(dir: string) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      rmdirRecursive(full);
    } else {
      fs.unlinkSync(full);
    }
  }
  fs.rmdirSync(dir);
}

export interface MakeTomlOptions {
  /** Module path relative to the toml location. */
  module?: string;
  /** Extension target. Defaults to `"purchase.checkout.block.render"`. */
  target?: string;
  /** Whether to include `network_access = true` under `[extensions.capabilities]`. */
  networkAccess?: boolean;
  /** Whether to include `api_access = true` under `[extensions.capabilities]`. */
  apiAccess?: boolean;
  /** Override the `api_version` in the TOML. Defaults to the library's API version. */
  apiVersion?: string;
}

export function makeToml(options: MakeTomlOptions = {}): string {
  const {
    module: modulePath = './fixtures/test-module.ts',
    target = 'purchase.checkout.block.render',
    networkAccess,
    apiAccess,
    apiVersion = API_VERSION,
  } = options;

  const capabilityLines: string[] = [];
  if (networkAccess) capabilityLines.push('network_access = true');
  if (apiAccess) capabilityLines.push('api_access = true');

  const capabilities =
    capabilityLines.length > 0
      ? `\n[extensions.capabilities]\n${capabilityLines.join('\n')}\n`
      : '';

  return `\
api_version = "${apiVersion}"

[[extensions]]
name = "test-extension"
handle = "test-extension"
type = "ui_extension"

[[extensions.targeting]]
module = "${modulePath}"
target = "${target}"
${capabilities}`;
}
