// This file is copied from Web https://github.com/Shopify/web/blob/master/packages/@shopify/safe-redirect

export interface Options {
  matchPath?: RegExp | string;
  requireAbsolute?: boolean;
  requireSSL?: boolean;
  whitelist?: string[];
  subdomains?: string[];
}

const FILE_URI_MATCH = /\/\/\//;
const INVALID_RELATIVE_URL = /[/\\][/\\]/;
const WHITESPACE_CHARACTER = /\s/;
const VALID_PROTOCOLS = ['https:', 'http:', 'mailto:'];
const DUMMY_HOSTNAME = 'http://test.com';

export function isSafe(
  redirectUrl: unknown,
  {whitelist = [], subdomains = [], matchPath, requireAbsolute, requireSSL}: Options = {},
): redirectUrl is string {
  if (typeof redirectUrl !== 'string') {
    return false;
  }

  if (FILE_URI_MATCH.test(redirectUrl) || WHITESPACE_CHARACTER.test(redirectUrl)) {
    return false;
  }

  if (redirectUrl.startsWith('/')) {
    if (whitelist.length > 0 || subdomains.length > 0 || requireAbsolute || requireSSL) {
      return false;
    }

    if (matchPath) {
      // Creating a new URL expands the pathname in case of things like `/a/../b`
      return pathMatches(new URL(redirectUrl, DUMMY_HOSTNAME), redirectUrl, matchPath);
    }

    const redirectRelativePath = new URL(redirectUrl, DUMMY_HOSTNAME);
    return !INVALID_RELATIVE_URL.test(redirectRelativePath.pathname);
  }

  let url: URL;

  try {
    url = new URL(redirectUrl);
  } catch (error) {
    return false;
  }

  if (!VALID_PROTOCOLS.includes(url.protocol)) {
    return false;
  }

  if (requireSSL && url.protocol !== 'https:') {
    return false;
  }

  if (url.username || url.password) {
    return false;
  }

  if (matchPath && !pathMatches(url, redirectUrl, matchPath)) {
    return false;
  }

  if (!hostIsValid(url, whitelist, subdomains)) {
    return false;
  }

  return true;
}

function hostIsValid(url: URL, whitelist: string[], subdomains: string[]) {
  if (!subdomains.every((subdomain) => subdomain.startsWith('.'))) {
    throw new TypeError('Subdomains must begin with .');
  }

  const {hostname} = url;

  return (
    (whitelist.length === 0 && subdomains.length === 0) ||
    whitelist.includes(hostname) ||
    subdomains.some((subdomain) => hostname.endsWith(subdomain))
  );
}

function pathMatches(url: URL, originalUrl: string, matcher: string | RegExp) {
  const {pathname} = url;

  // Gets just the unresolve pathname, i.e., `http://foo.com/a/../b => /a/../b
  const originalPathname = originalUrl.replace(url.origin, '').split('?')[0];

  return typeof matcher === 'string'
    ? pathname === matcher && originalPathname === matcher
    : matcher.test(pathname) && matcher.test(originalPathname);
}
