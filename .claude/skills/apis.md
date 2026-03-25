---
name: ui-extensions-validate-apis
description: Use when validating API documentation updates in the ui-extensions repo. Covers API descriptions, JSDoc quality, supported tags, examples, and shared component docs. Run after ui-extensions:style-lint.
---

# APIs Validation

Run after `ui-extensions:style-lint`. Also run `ui-extensions:type-definitions`.

**How to use:** Evaluate each item against the files provided. Skip items that clearly don't apply. Flag anything you can't definitively verify rather than guessing. Covers checkout and customer account surfaces.

**Verification:** Cross-reference every description against the actual type definition. For each API description, confirm that every property, method, or behavior it mentions actually exists in the corresponding `.d.ts` interface. If a description references something that doesn't exist in the type, flag it as a must-fix. If you can't verify a claim, flag it explicitly. If you don't know what the correct value should be, recommend the author verify or remove the claim.

## API Descriptions

- [ ] Starts with "The [API Name] API lets you..."
- [ ] Description includes a tutorial link (flag if missing; don't validate the URL)
- [ ] Explains purpose and use cases (not just "provides access to...")

**Good:**

> "The Action Extension API lets you build action extensions that merchants access from the More actions menu on details and index pages. Use this API to create workflows for processing resources, configuring settings, or integrating with external systems."

**Avoid:**

> "The Action Extension API provides access to action extension functionality."

## JSDoc Authoring

Documentation is authored as JSDoc comments on TypeScript types. Types marked with `@publicDocs` are extracted by `@shopify/generate-docs` into generated JSON. JSDoc comments are the source of truth for all descriptions.

### Supported Tags

| Tag                          | Purpose                                        | Example                                  |
| ---------------------------- | ---------------------------------------------- | ---------------------------------------- |
| `@publicDocs`                | Marks a type for doc extraction                | `@publicDocs` (no value)                 |
| `@default` / `@defaultValue` | Default value for a property                   | `@default 'base'`                        |
| `@deprecated`                | Marks as deprecated with optional message      | `@deprecated Use alternative instead.`   |
| `@example`                   | Code example with optional caption/description | See format below                         |
| `@see`                       | Cross-reference link                           | `@see https://developer.mozilla.org/...` |
| `@private`                   | Hides from generated docs                      | `@private` (no value)                    |
| `@protected`                 | Marks as protected in docs                     | `@protected` (no value)                  |

### `@example` Tag Format

````typescript
/**
 * @example
 * <caption>Example title</caption>
 * <description>Example description</description>
 * ```
 * code here
 * ```
 */
````

- `<caption>` defines the example title (periods stripped from end)
- `<description>` defines the example description
- Multiple code blocks with `// Tab title` comments create tabbed examples

### JSDoc Quality

- [ ] Every public type/interface has a JSDoc description (not just the type signature)
- [ ] Descriptions explain **what it does and when to use it**, not just **what it is**
- [ ] `@publicDocs` is present on types intended for documentation
- [ ] Dependencies referenced by `@publicDocs` types don't need their own tag (auto-included)
- [ ] `@default` tags present for properties with default values
- [ ] `@deprecated` tags include a migration message, not just the bare tag
- [ ] `@see` links point to valid resources (flag for human verification)
- [ ] No unrecognized JSDoc tags (unrecognized tags are silently ignored by the generator)

## URL Placeholders

- [ ] Use `{API_VERSION}` placeholder in documentation links (not hardcoded versions)
- [ ] Surface name is hardcoded: `/docs/api/checkout-ui-extensions/{API_VERSION}/...` or `/docs/api/customer-account-ui-extensions/{API_VERSION}/...`
- [ ] Shared components use both `{API_NAME}` and `{API_VERSION}`: `/docs/api/{API_NAME}/{API_VERSION}/...`

## Examples

- [ ] Description explains what the example does AND why (not "This example shows...")
- [ ] Title / `<caption>`: Action-oriented verb phrase (e.g., "Process selected products")
- [ ] Links to related APIs/components in the description
- [ ] Each example has a distinct use case

## API Properties

- [ ] Each property has a JSDoc description
- [ ] Signal-based properties (`SubscribableSignalLike`) explain reactive behavior
- [ ] Required vs optional clearly indicated

## API Methods

- [ ] Method descriptions explain when/how to call
- [ ] Return types documented
- [ ] Parameters described

## Shared Component Descriptions (`src/docs/shared/components/*.ts`)

- [ ] 2-paragraph description minimum:
  - Paragraph 1: What the component does and when to use it
  - Paragraph 2: How it works, key behaviors, interactions
- [ ] Include practical guidance (e.g., "A button triggers the modal using the `commandFor` attribute")
- [ ] Use `{API_NAME}` and `{API_VERSION}` placeholders in all links
- [ ] `category`: Usually `'Polaris web components'`
- [ ] `subCategory`: Set appropriately (e.g., `'Overlays'`, `'Forms'`, `'Layout and structure'`)

## Missing Assets

- [ ] Every target has a corresponding example directory
- [ ] Every component has at least one example file
- [ ] Screenshots exist for visual components (if applicable)

---

## Output Format

```markdown
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
