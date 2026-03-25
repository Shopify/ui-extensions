---
name: ui-extensions-validate-components
description: Use when validating component documentation updates in the ui-extensions repo. Covers example file format, component descriptions, best practices, limitations, and sections to remove. Run after ui-extensions:style-lint.
---

# Components Validation

Run after `ui-extensions:style-lint`. Also run `ui-extensions:type-definitions` and `ui-extensions:cross-surface`.

**How to use:** Evaluate each item against the files provided. Skip items that clearly don't apply. Flag anything you can't definitively verify rather than guessing. Covers checkout and customer account surfaces.

**Verification:** Cross-reference every description against the actual type definition. For each component description, confirm that every prop, slot, behavior, or value it mentions actually exists in the component's `.d.ts` interface. If a description references something that doesn't exist in the type, flag it as a must-fix. If you can't verify a claim, flag it explicitly. If you don't know what the correct value should be, recommend the author verify or remove the claim.

## Example Files (HTML Only)

- [ ] Remove all `.jsx` example files from the `examples/` folder
- [ ] Remove all JSX/React tab references from `.doc.ts` files
- [ ] Set tab `language: 'html'` (lowercase)

## Component Descriptions

- [ ] Starts with "The [Component Name] component [action verb]..."
- [ ] Description includes a resource link where applicable (flag if missing; don't validate the URL)
- [ ] Explains purpose and use cases (not just "provides access to...")
- [ ] Uses friendly term for component names, not code syntax ("button", not `Button` or `s-button`)

**Good:**

> "The button component triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use button to let users perform specific tasks or initiate interactions throughout the interface."

**Avoid:**

> "The button component provides access to action extension functionality."

## subSections

### Best Practices

- [ ] Each bullet starts with `**Action verb phrase**:` (bold, colon outside)
- [ ] Each bullet ends with a period
- [ ] Flag any best practice that appears generic or not specific to this component — the author should confirm traceability to Built for Shopify requirements, Polaris guidelines, or documented UX research
- [ ] No generic advice — each item addresses scenarios specific to this component, or remove it

### Limitations

- [ ] Each limitation describes a real technical or UX constraint, not obvious behavior
- [ ] No filler — if a limitation isn't a real constraint, remove it

## Live Schema Validation

Use `mcp__shopify-dev-mcp__validate_component_codeblocks` to verify example HTML against the live component schema. This catches invalid component names, wrong props, and bad prop values.

- Pass `api: 'polaris-checkout-extensions'` or `'polaris-customer-account-extensions'` depending on the surface
- Requires a `conversationId` from `mcp__shopify-dev-mcp__learn_shopify_api`

## Sections to Remove

- [ ] Flag if the `.doc.ts` file sets `usefulFor` — this section should be removed from the component's doc config
- [ ] Remove "Content guidelines" section
- [ ] Remove "Related to" section/links
- [ ] Only keep Best Practices and Limitations where applicable

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
