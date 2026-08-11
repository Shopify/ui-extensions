---
'@shopify/ui-extensions': major
'@shopify/ui-extensions-tester': major
---

Remove the POS Action API (`shopify.action.presentModal()`) from action render targets (`*.action.render`).

Action render targets are themselves the modal destination that `presentModal()` opens, so exposing the Action API there had no meaningful destination — calling `shopify.action.presentModal()` from `pos.cart.line-item-details.action.render` (the one action render target that still exposed it) pushed another instance of the same target onto the navigation stack, rendering a duplicate modal on top of the already-open one.

Action render targets now expose only `ActionTargetApi` plus their contextual APIs, matching every other `*.action.render` target. Extensions that need in-workflow navigation should use the Navigation API (`shopify.navigation`). This is a versioned breaking change: the surface is removed for API versions `2026-10` and later; older API versions keep their published types.
