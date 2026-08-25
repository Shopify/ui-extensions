---
'@shopify/ui-extensions': patch
---

Fix the preact entry points in package.json:

- Add a `typesVersions` entry for `@shopify/ui-extensions/preact` so its types resolve under TypeScript's legacy `moduleResolution: "node"` (node10), matching the existing entries for `checkout/preact` and `customer-account/preact`.
- Remove the dead `./point-of-sale/preact` entry from `exports`. Its source file was intentionally deleted right after it was introduced, but the `exports` entry was left behind, pointing at files that are never built or published — the import has never resolved in any released version. POS extensions should use the generic `@shopify/ui-extensions/preact` entry point.
