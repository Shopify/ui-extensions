---
name: ui-extensions-validate-cross-surface
description: Use when validating consistency of component or API documentation across multiple surfaces (Admin, Checkout, POS) in the ui-extensions repo. Covers description parity, terminology, and shared component consistency.
---

# Cross-Surface Consistency Validation

Use when a component or shared description appears on multiple surfaces.

**How to use:** Evaluate each item against the files provided. Skip items that clearly don't apply. Flag anything you can't definitively verify rather than guessing.

## Description Consistency

- [ ] Compare descriptions with the same component on other surfaces (Admin, Checkout, POS)
- [ ] Descriptions should be aligned in scope and quality — not necessarily identical, but consistent in what they cover
- [ ] Surface-specific nuances should be explicitly noted where applicable

## Terminology

- [ ] Terminology is consistent across surfaces (same words for the same concepts)
- [ ] Extension type names use the correct domain prefix, lowercased: admin UI extension, checkout UI extension, POS UI extension

## Shared Components

- [ ] Shared components (via `src/docs/shared/components/*.ts`) have consistent descriptions across the surfaces that use them
- [ ] If a shared component description was updated, verify the change reads correctly in all surfaces it appears on
- [ ] Placeholder usage: `{API_NAME}` and `{API_VERSION}` are used (not hardcoded surface/version values)

---

## Output Format

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
