---
'@shopify/ui-extensions': patch
---

Fix the `s-checkbox` JSX type so the documented `label` slot can be provided as slotted children. `Checkbox` now uses `BaseElementPropsWithChildren` (matching `Chip` and other slot-bearing components) instead of the childless `BaseElementProps`, which previously left `CheckboxElementSlots` unusable via JSX.
