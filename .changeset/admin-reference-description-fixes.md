---
'@shopify/ui-extensions': patch
---

Corrected three admin reference descriptions: the `s-button-group` slots (a child needs the `primary-action` or `secondary-actions` slot, and `primary-action` accepts `variant="primary"` or `variant="auto"`), the `ListSlotType` positions of `secondary` and `inline` content, and how to verify the token from `auth.idToken()` (HS256 with the app's client secret).
