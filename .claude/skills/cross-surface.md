---
name: ui-extensions-validate-cross-surface
description: Use when validating consistency of component or API documentation across checkout and customer account surfaces in the ui-extensions repo. Covers description parity, terminology, and shared component consistency.
---

# Cross-Surface Consistency Validation

Use when a component or shared description appears on multiple surfaces.

**How to use:** Evaluate each item against the files provided. Skip items that clearly don't apply. Flag anything you can't definitively verify rather than guessing.

**Verification:** Where possible, verify claims against the actual source code (`.d.ts` types, source files). If you can't verify a claim, flag it explicitly. If you don't know what the correct value should be, recommend the author verify or remove the claim.

## Description Consistency

- [ ] Compare descriptions with the same component on checkout and customer account surfaces
- [ ] Descriptions should be aligned in scope and quality — not necessarily identical, but consistent in what they cover
- [ ] Surface-specific nuances should be explicitly noted where applicable

## Terminology

- [ ] Terminology is consistent across surfaces (same words for the same concepts)
- [ ] Extension type names use the correct domain prefix, lowercased: checkout UI extension, customer account UI extension

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

### Can't verify
- [claims that couldn't be verified against source — recommend author confirm or remove]

### Must fix
- [items that must be fixed before merging]

### Recommendation
[Ready to merge / Needs changes / Major revision needed]
```
