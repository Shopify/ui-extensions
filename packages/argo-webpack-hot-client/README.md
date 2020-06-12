# `@shopify/argo-webpack-hot-client`

This package provides utilities for automatically reloading an Argo script when content changes. The tools provided are similar to [`webpack-hot-client`](https://github.com/webpack-contrib/webpack-hot-client), but supports being run in a web worker and using the `self.shopify` API for "full" reloads.

## Installation

```bash
$ yarn add @shopify/argo-webpack-hot-client --dev
```

## Usage

You’ll reference two parts of this package in your webpack configuration:

- Include the `@shopify/argo-webpack-hot-client/worker` file in an array of files for the `entry` config.
- Import the `ArgoHotClient` plugin and include it in your webpack configuration. This plugin **should not** be used in production builds. It also includes webpack’s `HotModuleReplacementPlugin` automatically, so do not include it manually in your configuration.

```ts
import {ArgoHotClient} from '@shopify/argo-webpack-hot-client';

export function createWebpackConfig() {
  return {
    // Rest of config...
    entry: [
      // Make sure this entry appears first!
      '@shopify/argo-webpack-hot-client/worker',
      // Other entries
      'app/index',
    ],
    plugins: [
      // The order of your webpack plugins usually doesn’t matter
      new ArgoHotClient(),
    ],
  };
}
```
