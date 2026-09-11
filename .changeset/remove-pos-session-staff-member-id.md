---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Remove the deprecated `session.currentSession.staffMemberId` property from POS UI extensions in API version 2026-10. Use the reactive `session.staffMember` signal to access the staff member who is currently pinned in to POS.

This is a versioned breaking change. API versions 2026-07 and earlier retain their published types. The separate receipt event `session.staffMemberId` field is unchanged.
