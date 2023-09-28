---
'@shopify/ui-extensions': major
'@shopify/ui-extensions-react': major
---

Bump `@remote-ui/core` and `@remote-ui/react` versions.

> **Warning**: Extensions using `@shopify/ui-extensions-react` must now use react `^18.0.0` or greater.

Extensions are also expected to reconcile their own react version.

In order to use the latest version of `@shopify/ui-extensions-react`, you should modify your `package.json` to resemble the following:

```
{
  ...
  "dependencies": {
    "react": "^18.0.0",
    "@shopify/ui-extensions": "2023.10.x",
    "@shopify/ui-extensions-react": "2023.10.x",
    "react-reconciler": "0.29.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0"
  }
}
```
