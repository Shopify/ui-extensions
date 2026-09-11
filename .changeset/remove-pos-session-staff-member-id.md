---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Remove the deprecated `session.currentSession.staffMemberId` property from POS UI extensions. Use the reactive `session.staffMember` signal to access the staff member who is currently pinned in to POS.
