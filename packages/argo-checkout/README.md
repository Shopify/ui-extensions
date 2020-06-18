# `@shopify/argo-checkout`

This library contains type definitions and other utilities for writing Argo extensions in Shopify’s checkout. However, nothing in this library is strictly required to write an Argo extension. As a developer building an Argo extension, you can forego the utilities this library provides entirely, and instead use the [global `shopify` API](src/globals) directly in a plain JavaScript file. The script below is a valid Argo script without any additional processing:

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
  root.mount();
});
```

Keeping in mind that any utility provided by this library is only a convenience API on top of the `shopify` global, the rest of the documentation for this library will show examples using JavaScript imports from the `@shopify/argo-checkout` library. Using JavaScript modules in this way requires a [build step](../packages/argo-run), but can provide useful developer experience features and opportunities for build-time performance optimizations.

## Getting started

### 1. Install the Shopify CLI

TODO: instructions :)

### 2. Create an extension

Run `shopify create extension` to get started. When prompted, indicate that you’d like to create a post purchase extension. This command will clone an extension template, which contains a basic extension and the necessary development tooling.

### 3. Run the local server

Run `shopify serve` and start coding! Your application will be built from the `index` file created by the Shopify CLI, but you may add additional JavaScript files using [`import` and `export` statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

## API

This package provides utilities, types, and documentation for the many different APIs an Argo extension can access. Before you write your first extension, you should read through the following documentation in order:

- Details about [the globals available to Argo extensions](src/globals)
- The list of [checkout extension points](src/extension-points)
- An explanation of how [extensions can render UI natively in checkout](documentation/rendering.md)
- The list of [components available to Argo extensions](src/components)

Once you’ve read the documents above, you’re ready to write a checkout extension. If you’re wanting to learn even more, this repo has a few additional guides that cover techniques for writing larger, more complex extensions:

- Strategies for [unit testing extensions](documentation/testing.md)
- A custom [React](https://reactjs.org) renderer that supports [rendering Argo extensions with React](src/react)
