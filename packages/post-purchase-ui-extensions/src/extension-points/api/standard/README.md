# Standard extension point API

This document outlines the API that is provided to every extension point. When the extension point renders UI (like `Checkout::PostPurchase::Render`), these properties are part of the second argument to an extension point. When the extension point does not render UI (like `Checkout::PostPurchase::ShouldRender`), these properties are part of the first argument.

## `locale`

The locale of the checkout in which the extension is running. This value is provided as a string in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag).

## `version`

The UI extension renderer version being used for this extension. Currently, there is only a single version, `'unstable'`.

## `extensionPoint`

The extension point that was run. This can be useful if you register a single function to handle more than one extension point:

```ts
import {extend} from '@shopify/post-purchase-ui-extensions';

extend('FirstExtensionPoint', handleExtensionPoint);
extend('SecondExtensionPoint', handleExtensionPoint);

function handleExtensionPoint(input) {
  switch (input.extensionPoint) {
    case 'FirstExtensionPoint': {
      // ...
      break;
    }
    case 'SecondExtensionPoint': {
      // ...
      break;
    }
  }
}
```
