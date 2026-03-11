---
name: ui-extensions-validate-apis
description: Use when validating API documentation updates in the ui-extensions repo. Covers API descriptions, .doc.ts file structure, properties, methods, helper docs, and missing assets. Run after ui-extensions:universal.
---

# APIs Validation

Run after `ui-extensions:universal`. Also run `ui-extensions:type-definitions`.

**How to use:** Evaluate each item against the files provided. Skip items that clearly don't apply. Flag anything you can't definitively verify rather than guessing. Covers checkout and customer account surfaces.

## API Descriptions

- [ ] Starts with "The [API Name] API lets you..."
- [ ] Description includes a tutorial link (flag if missing; don't validate the URL)
- [ ] Explains purpose and use cases (not just "provides access to...")

**Good:**

> "The Action Extension API lets you build action extensions that merchants access from the More actions menu on details and index pages. Use this API to create workflows for processing resources, configuring settings, or integrating with external systems."

**Avoid:**

> "The Action Extension API provides access to action extension functionality."

## URL Placeholders

### Surface-specific `.doc.ts` files

- [ ] Use `{API_VERSION}` placeholder (surface name is hardcoded)
- [ ] Format: `/docs/api/checkout-ui-extensions/{API_VERSION}/...` or `/docs/api/customer-account-ui-extensions/{API_VERSION}/...`

### Shared component files (`src/docs/shared/components/*.ts`)

- [ ] Use both `{API_NAME}` and `{API_VERSION}` placeholders
- [ ] Format: `/docs/api/{API_NAME}/{API_VERSION}/...`

## API `.doc.ts` File Structure

### `requires` field

- [ ] Links to required component using the correct surface path, e.g. `'the [component name](/docs/api/checkout-ui-extensions/{API_VERSION}/...) component.'`

### `defaultExample`

- [ ] `description`: Explains what the example does AND why (not "This example shows...")
- [ ] `codeblock.title`: Action-oriented verb phrase (e.g., "Process selected products")
- [ ] Links to related APIs/components in the description

### Additional Examples (`examples` object)

- [ ] `examples.description`: Brief intro to the examples section
- [ ] Each example has a distinct use case with detailed description
- [ ] Example titles are action-oriented verbs

### `subSections` (Best Practices & Limitations)

- [ ] **Best Practices**: Each item starts with `**Bold verb phrase:**` (colon outside bold)
- [ ] **Limitations**: Uses contractions (can't, don't); explains what AND why it matters
- [ ] Links to workarounds or alternatives where applicable

### `metadata`

- [ ] `category`: Set appropriately (e.g., `'Target APIs'`)
- [ ] `subCategory`: Set appropriately (e.g., `'Core APIs'`, `'Utility APIs'`)

### `definitions` section

- [ ] `title`: Usually "Properties"
- [ ] `description`: Explains what the API object provides and how to access it
- [ ] `type`: Matches TypeScript interface name

## API Properties

- [ ] Each property has a JSDoc description
- [ ] Signal-based properties (`SubscribableSignalLike`) explain reactive behavior
- [ ] Required vs optional clearly indicated

## API Methods

- [ ] Method descriptions explain when/how to call
- [ ] Return types documented
- [ ] Parameters described

## Helper Docs (`helper.docs.ts`)

- [ ] Reusable API definitions are kept in helper files
- [ ] Constants like `CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION` are up to date

## Missing Assets

- [ ] Every target has a corresponding example directory
- [ ] Every component has at least one example file
- [ ] Screenshots exist for visual components (if applicable)

## Shared Component Descriptions (`src/docs/shared/components/*.ts`)

- [ ] 2-paragraph description minimum:
  - Paragraph 1: What the component does and when to use it
  - Paragraph 2: How it works, key behaviors, interactions
- [ ] Include practical guidance (e.g., "A button triggers the modal using the `commandFor` attribute")
- [ ] Use `{API_NAME}` and `{API_VERSION}` placeholders in all links
- [ ] `category`: Usually `'Polaris web components'`
- [ ] `subCategory`: Set appropriately (e.g., `'Overlays'`, `'Forms'`, `'Layout and structure'`)

---

## Output Format

```markdown
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
