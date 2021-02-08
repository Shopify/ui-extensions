# Upgrading from `@shopify/argo-checkout(-react)` 0.8.x to 0.9.x

In `@shopify/argo-checkout` and `@shopify/argo-checkout-react` version 0.9.x, significant changes were made to the build process to enable smaller bundle sizes.

In particular, projects using React (through the `@shopify/argo-checkout-react` package) are about [75% smaller](https://github.com/Shopify/argo-checkout/pull/63) for the template extension. This was done by replacing all usage of React with [`@remote-ui/mini-react`](https://github.com/Shopify/remote-ui/tree/main/packages/mini-react), a tiny re-implementation of the core React API.

In order to get access to these improvements, you **must** also upgrade your `@shopify/argo-run` `devDependency`, to at least version `0.3.0`, which contains the build configuration that performs this replacement.

For most projects, this change should be completely transparent, with one exception: you can now remove the `React` default import from all your components, as this new build system uses the [`jsx-runtime` transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) to remove this bit of boilerplate:

```diff
// MyComponent.tsx

- import React from 'react';
import {Text} from '@shopify/argo-checkout-react';

function MyComponent() {
  return <Text>Only the important stuff!</Text>;
}
```

> **Note:** to get the full benefits of this new build system, you _should_ remove all the default imports, as they bring in some code that can’t be tree shaken out of your final bundle even if you don’t use it.

If you use TypeScript, you will also need to change the following option in your project’s `tsconfig.json` file:

```diff
{
-   "jsx": "react"
+   "jsx": "react-jsx"
}
```

If you find any incompatibilities with this React replacement and an NPM package that depends on React, please [raise an issue](https://github.com/Shopify/argo-checkout/issues/new). You can revert to the old system, which used [`@remote-ui/react`](https://github.com/Shopify/remote-ui/tree/main/packages/react) to bridge your code to the “Real” version of React, by adding both `react` (minimum version: 17.0.0) and `@remote-ui/react` (minimum version: 3.1.0) as dependencies in your project’s `package.json`:

```diff
{
  "dependencies": {
+     "react": "^17.0.0",
+     "@remote-ui/react": "^3.1.0"
  }
}
```
