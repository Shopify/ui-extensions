---
'@shopify/ui-extensions': patch
---

The function canNavigate of Navigation API will return a Promise instead of a boolean since it throws an error if the user is on a version of POS extensions that is lower than 2025-10.
