/**
 * The API version supported by this version of the library.
 *
 * At build time, `__TESTER_PACKAGE_VERSION__` is replaced by rollup with the
 * raw NPM version string from package.json (e.g. `"2026.4.0-rc.1"`).
 *
 * When running from source (e.g. in tests), the placeholder is still
 * present, so we fall back to reading package.json via require.
 */

declare const __TESTER_PACKAGE_VERSION__: string;

const npmVersion: string =
  typeof __TESTER_PACKAGE_VERSION__ === 'undefined'
    ? (require('../package.json') as {version: string}).version // eslint-disable-line @typescript-eslint/no-var-requires
    : __TESTER_PACKAGE_VERSION__;

function npmVersionToApiVersion(version: string): string {
  const [year, minor] = version.split('.');
  return `${year}-${minor!.padStart(2, '0')}`;
}

export const API_VERSION: string = npmVersionToApiVersion(npmVersion);
