# UI Extensions Documentation Skills

Skills for validating documentation updates in this repo. Used by the docs team. All skills are **invoked manually** — they do not auto-trigger.

## Quick Navigation

| Updating...                       | Invoke these skills (in order)                                                                                                                        |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Any page**                      | `ui-extensions:style-lint`                                                                                                                            |
| **Any page with example changes** | `ui-extensions:style-lint` → `ui-extensions:examples`                                                                                                 |
| **Component**                     | `ui-extensions:style-lint` → `ui-extensions:examples` → `ui-extensions:components` → `ui-extensions:type-definitions` → `ui-extensions:cross-surface` |
| **API**                           | `ui-extensions:style-lint` → `ui-extensions:examples` → `ui-extensions:apis` → `ui-extensions:type-definitions`                                       |
| **Links**                         | `ui-extensions:link-validation` (run separately — uses MCP tools, adds time)                                                                          |
| **Build output**                  | `ui-extensions:build-verification`                                                                                                                    |

Not sure which to use? Invoke `ui-extensions:router`.

## Available Skills

- **`ui-extensions:router`** — Entry point. Routes to the correct skills based on page type.
- **`ui-extensions:style-lint`** — Mechanical text checks: contractions, punctuation, bolding, backticks, capitalization, file references. Always run first.
- **`ui-extensions:examples`** — Example description quality, titles, accessibility, uniqueness, usefulness. Only when example files are changed.
- **`ui-extensions:components`** — Component descriptions, example file format, best practices/limitations.
- **`ui-extensions:apis`** — API descriptions, JSDoc authoring, supported tags, properties, methods, shared component docs.
- **`ui-extensions:type-definitions`** — JSDoc quality, slots, events, source of truth, architecture patterns.
- **`ui-extensions:cross-surface`** — Description and terminology consistency across Admin, Checkout, POS.
- **`ui-extensions:link-validation`** — Verifies documentation links via MCP tools. Run separately due to overhead.
- **`ui-extensions:build-verification`** — Docs generation (`yarn docs:checkout`, `yarn docs:customer-account`), generated JSON verification, local preview.

## How to Invoke

Name the skill in your prompt:

> "Use ui-extensions:universal to validate this component page."
> "Use ui-extensions:router to figure out which skills I need."
