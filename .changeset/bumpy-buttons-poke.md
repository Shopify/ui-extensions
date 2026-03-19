---
'@shopify/ui-extensions-tester': patch
'@shopify/ui-extensions': patch
---

Remove types for `ui` from checkout ui extension api as `ui` wasn't supported since 2025.10.0 For reference, closing a modal can be done declaritively on the modal polaris component, instead of the deprecated `ui.overlay.close`
