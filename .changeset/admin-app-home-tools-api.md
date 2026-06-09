---
'@shopify/ui-extensions': patch
'@shopify/ui-extensions-tester': patch
---

Expose the `Tools` API on `AppHomeApi` so `admin.app.home.render` extensions can call `shopify.tools.register(...)` even before the CLI generates typed overloads. Adds a matching mock to `@shopify/ui-extensions-tester`.
