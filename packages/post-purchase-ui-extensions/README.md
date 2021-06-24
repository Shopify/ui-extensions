# `@shopify/post-purchase-ui-extensions`

This library contains type definitions and other utilities for writing UI Extensions in the post-purchase page of Shopify’s checkout. However, nothing in this library is strictly required to write a UI extension. As a developer building a UI extension, you can forego the utilities this library provides entirely, and instead use the [global `shopify` API](documentation/globals.md) directly in a plain JavaScript file. The script below is a valid UI extension script without any additional processing:

```js
shopify.extend('Checkout::PostPurchase::Render', (root, input) => {
  const button = root.createComponent('Button', {
    onPress() {
      console.log('Upsold!');
      input.done();
    },
  });

  button.appendChild('Buy now');

  root.appendChild(button);
});
```

Keeping in mind that any utility provided by this library is only a convenience API on top of the `shopify` global, the rest of the documentation for this library will show examples using JavaScript imports from the `@shopify/post-purchase-ui-extensions` library. Using JavaScript modules in this way requires a [build step](../packages/checkout-ui-extensions-run), but can provide useful developer experience features and opportunities for build-time performance optimizations.

## Getting started

Before you dig in to what this library has to offer, please read through the [getting started guide](https://docs.google.com/document/d/1JqTUEBXWZ2gKC7bfWc0wy7i6zHtHmldd3ef4N3FHoeU/edit#heading=h.1256j7138hx).

## API

This package provides utilities, types, and documentation for the many different APIs a UI extension can access. Before you write your first extension, you should read through the following documentation in order:

- Details about [the globals available to UI Extensions](documentation/globals.md)
- The list of [checkout extension points](documentation/extension-points.md)
- An explanation of how [extensions can render UI natively in checkout](documentation/rendering.md)
- The list of [components available to UI Extensions](documentation/components.md)

Once you’ve read the documents above, you’re ready to write a checkout extension. If you’re wanting to learn even more, this repo has a few additional guides that cover techniques for writing larger, more complex extensions:

- Strategies for [unit testing extensions](documentation/testing.md)
- [`@shopify/post-purchase-ui-extensions-react`](../post-purchase-ui-extensions-react), which allows complex extensions to render using all the power of [React](https://reactjs.org)
