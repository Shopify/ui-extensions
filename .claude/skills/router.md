---
name: ui-extensions-router
description: Use when validating documentation updates in the ui-extensions repo and unsure which validation skills to invoke. Routes to the correct skill based on the page type being updated.
---

# UI Extensions Validation Router

Determines which validation skills to use based on page type.

## Quick Navigation

| Updating...                       | Invoke these skills (in order)                                                                                                                              |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Any page**                      | `ui-extensions:style-lint`                                                                                                                                  |
| **Any page with example changes** | `ui-extensions:style-lint` → `ui-extensions:examples`                                                                                                      |
| **Component**                     | `ui-extensions:style-lint` → `ui-extensions:examples` → `ui-extensions:components` → `ui-extensions:type-definitions` → `ui-extensions:cross-surface`      |
| **API**                           | `ui-extensions:style-lint` → `ui-extensions:examples` → `ui-extensions:apis` → `ui-extensions:type-definitions`                                            |
| **Links**                         | `ui-extensions:link-validation` (run separately — uses MCP tools, adds time)                                                                               |
| **Build output**                  | `ui-extensions:build-verification`                                                                                                                          |

## How to Identify Page Type

- **Component**: `.doc.ts` files under `docs/surfaces/*/reference/components/`
- **API**: `.doc.ts` files under `docs/surfaces/*/reference/apis/` or `src/surfaces/*/api/`
- **Type definitions**: `.d.ts` files

## Output Format (all validation skills)

```
## Validation Report

### What's good
- [passing items]

### Needs attention
- [items that may need work]

### Must fix
- [items that must be fixed before merging]

### Recommendation
[Ready to merge / Needs changes / Major revision needed]
```
