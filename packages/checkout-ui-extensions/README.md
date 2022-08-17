# `@shopify/checkout-ui-extensions`

This library contains type definitions and other utilities for writing UI extensions in Shopify’s checkout. However, nothing in this library is strictly required to write a UI extension. As a developer building a UI extension, you can forego the utilities this library provides entirely, and instead use the [global `shopify` API](documentation/globals.md) directly in a plain JavaScript file. The script below is a valid UI extension script without any additional processing:

```js
shopify.extend('Checkout::Dynamic::Render', (root, api) => {
  const button = root.createComponent('Button', {
    onPress() {
      console.log('Upsold!');
    },
  });

  button.appendChild('Buy now');

  root.appendChild(button);
});
```

Keeping in mind that any utility provided by this library is only a convenience API on top of the `shopify` global, the rest of the documentation for this library will show examples using JavaScript imports from the `@shopify/checkout-ui-extensions` library. Using JavaScript modules in this way requires a [build step](https://shopify.dev/apps/checkout/custom-fields/getting-started#step-2-preview-your-extension), but can provide useful developer experience features and opportunities for build-time performance optimizations.

## Getting started

Before you dig in to what this library has to offer, read through the [Checkout UI extensions overview](https://shopify.dev/api/checkout-extensions/checkout), and a getting started guide from one of the [checkout extension examples](https://shopify.dev/apps/checkout/custom-fields/getting-started).

## API

This package provides utilities, types, and documentation for the many different APIs a UI extension can access. Before you write your first extension, you should read through the following documentation in order:

- Details about [the globals available to UI extensions](documentation/globals.md)
- The list of [checkout extension points](documentation/extension-points.md)
- An explanation of how [extensions can render UI natively in checkout](documentation/rendering.md)
- The list of [components available to UI extensions](documentation/components.md)

Once you’ve read the documents above, you’re ready to write a checkout extension. If you’re wanting to learn even more, this repo has a few additional guides that cover techniques for writing larger, more complex extensions:

- Strategies for [unit testing extensions](documentation/testing.md)
- [`@shopify/checkout-ui-extensions-react`](../checkout-ui-extensions-react), which allows complex extensions to render using all the power of [React](https://reactjs.org)
