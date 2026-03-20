---
name: ui-extensions-validate-type-definitions
description: Use when validating .d.ts type definition files in the ui-extensions repo. Covers JSDoc quality, slot descriptions, event descriptions, source of truth verification, and architecture patterns. Run after ui-extensions:universal.
---

# Type Definitions Validation (`.d.ts` files)

Run after `ui-extensions:universal`.

**How to use:** Evaluate each item against the files provided. Skip items that clearly don't apply. Flag anything you can't definitively verify rather than guessing. Covers checkout and customer account surfaces.

**Verification:** Cross-reference every description against the actual type definition. For each JSDoc comment, confirm that every property, component, behavior, or value it mentions actually exists in the interface. If a description references a prop that isn't on the type, or describes behavior that doesn't match the type signature, flag it as a must-fix. If you can't verify a claim, flag it explicitly. If you don't know what the correct value should be, recommend the author verify or remove the claim.

## Property Descriptions (JSDoc)

### Quality Standards

- [ ] Every property has a JSDoc description (not just a type)
- [ ] Descriptions explain **what it does**, not just **what it is**
  - ❌ "The heading"
  - ✅ "The main title displayed at the top of the modal, rendered in the header alongside the close button."
- [ ] Include `@default` tags for properties with default values
- [ ] Include `@see` links to MDN for web platform concepts

### Content Guidelines

- [ ] Describe **when/why** to use, not just **what**
- [ ] Include practical examples in prose (e.g., "such as 'Order #1001'")
- [ ] Mention related properties when relevant
- [ ] For enum values, explain each option's use case

### Common Patterns

- [ ] **Size props**: List available values and when to use each
- [ ] **Boolean props**: Explain both true/false behaviors
- [ ] **Callback props**: Describe when fired, what event contains, typical use cases
- [ ] **Accessibility props**: Explain relationship to visible labels

## Slot Descriptions

- [ ] Every slot has a description explaining its purpose
- [ ] Slot descriptions mention accepted child components
- [ ] Link to child component docs (e.g., "Accepts a [button](/docs/api/...)")
- [ ] Note any restrictions on children (e.g., "single Button element with restricted properties")

## Event Descriptions

- [ ] Every event/callback has a JSDoc description
- [ ] Describes **when** the event fires (e.g., "before animation begins", "after fully closed")
- [ ] Describes **how** to access event data (e.g., `event.currentTarget.files`)
- [ ] Suggests typical use cases (e.g., "Use to perform cleanup or reset form state")
- [ ] For related events (onShow/onAfterShow), explains the difference

## Architecture Awareness

- [ ] Identify if types use `extends Pick<BaseType, ...>` pattern
- [ ] If expanding an interface to add JSDoc, document the workaround in comments

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
