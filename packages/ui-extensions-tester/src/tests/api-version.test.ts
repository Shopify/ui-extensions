import {API_VERSION} from '../api-version';

describe('API_VERSION', () => {
  // API_VERSION derives from the npm package version (2026.10.x -> "2026-10"),
  // so a semver-major changeset on this calver-keyed package rolls the year and
  // produces a nonexistent API version ("2027-00"), breaking every consumer
  // pinned to the branch's real version. Breaking changes here must be
  // released as minor bumps within the branch's calendar version.
  it('is a quarterly Shopify API version', () => {
    expect(API_VERSION).toMatch(/^\d{4}-(01|04|07|10)$/);
  });
});
