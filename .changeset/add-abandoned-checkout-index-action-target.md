---
'@shopify/ui-extensions': patch
'@shopify/ui-extensions-tester': patch
---

Add `admin.abandoned-checkout-index.action.render` and `admin.abandoned-checkout-index.action.should-render` extension targets for the abandoned checkout index page. This mirrors the action targets already available on other resource index pages (orders, customers, products, draft orders, etc.) and unblocks `admin.abandoned-checkout-index.action.link` admin link extensions.
