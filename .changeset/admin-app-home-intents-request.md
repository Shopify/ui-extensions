---
'@shopify/ui-extensions': patch
'@shopify/ui-extensions-tester': patch
---

Narrow `AppHomeApi.intents` to a new `AppHomeIntents` shape that exposes a signal-like `request` so the runtime can stream link intents into a long-lived `admin.app.home.render` extension. `WithGeneratedIntents` continues to narrow `request.value` to the CLI-generated variants.
