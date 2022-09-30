# Standard extension point API

This document outlines the API that is provided to every extension point. When the extension point renders UI (like `Checkout::PostPurchase::Render`), these properties are part of the second argument to an extension point. When the extension point does not render UI (like `Checkout::PostPurchase::ShouldRender`), these properties are part of the first argument.

## `locale`

The locale of the checkout in which the extension is running. This value is provided as a string in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag).

## `version`

The UI extension renderer version being used for the extension. Currently, there is only a single version, `'unstable'`.

## `extensionPoint`

The extension point that was run. This can be useful if you register a single function to handle more than one extension point:

```ts
import {extend} from '@shopify/checkout-ui-extensions';

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

## `lineItems`

The `lineItems` property gives you access to the merchandise the buyer is purchasing through checkout. Like other resources in checkout, this value is wrapped in a `StatefulRemoteSubscribable` in order to give your extension a way to subscribe to changes to the line items. These changes can happen when there are stock problems that require the buyer to change the contents of their cart, or when other extensions change the line items through the `applyLineItemChange()` APIs documented below.

```ts
import {extend} from '@shopify/checkout-ui-extensions';

extend('ExtensionPoint', (root, {lineItems}) => {
  const text = root.createText(
    `Your line items are: ${JSON.stringify(lineItems.current)}`,
  );
  root.appendChild(text);

  lineItems.subscribe((newLineItems) => {
    text.updateText(`Your new line items are: ${JSON.stringify(newLineItems)}`);
  });
});
```
