# Globals

## Shopify-specific globals

The most important API to a checkout UI extension is `shopify`, which is an object that’s globally available. This object has a single method, `extend`. `extend` takes the following arguments:

- The name of an available [checkout UI extension point](./extension-points.md)
- A function to call when Shopify’s ready to run the extension point. The function that you pass is called with at least one input argument, depending on the extension point. To see what you have access to, refer to the documentation for the extension point that you’re targeting.

```ts
shopify.extend('Checkout::Dynamic::Render', (...args) => {
  // Implement your Checkout::Dynamic::Render extension point logic here
});
```

This library provides an alias for `shopify.extend` in the form of the `extend()` export. This function is also strongly-typed. If you’re working in an editor that supports TypeScript’s language server (we recommend [VSCode](https://code.visualstudio.com)), then you get feedback about the input arguments to that extension point.

```ts
import {extend} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root, api) => {
  // Implement your Checkout::Dynamic::Render extension point logic here
  // If you hover over `api` in an editor that supports TypeScript, you’ll see
  // the properties and methods available for the extension point, even if you're
  // writing your extension in "vanilla" JavaScript.
});
```

For extensions that render UI, such as [`Checkout::Dynamic::Render`](./extension-points.md), the first argument is always a [`@remote-ui` `RemoteRoot` object](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoteroot) that enables you to render UI components into your extension point in checkout. You don't need to explicitly call [`mount()`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoterootmount) on this object. After the callback that you registered for the extension point ends, or if it returns a `Promise` that resolves, your initial UI is rendered.

That’s really all the global API you need to know to start writing a UI extension. You’ll find the documentation for additional APIs that are provided when an extension point is run in the [extension points documentation](./extension-points.md).

## Web platform globals

Checkout UI extensions always run in a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). This environment has access to many of the same globals as you’d get with JavaScript running in a browser. However, we only guarantee the presence of the following globals:

- [`self`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self), a reference back to the global object.
- [`console`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/console), which is the same `console` available in the browser and can be used for printing to the browser’s console (**Note**: your app **should not** log any content when running in production)
- [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [`clearTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout), [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), and [`clearInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval), which behave the same as they do outside a web worker
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) and related globals ([`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers), [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request), and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)), which can be used to make HTTPS requests to arbitrary endpoints (**Note**: any requests you make must explicitly support [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Glossary/CORS), just as they would if the request were coming from `fetch()` outside of a web worker)

> Caution:
> You **must not** rely on any other globals being available. Many will be explicitly overwritten to be `undefined` in the sandbox, and non-language globals that aren’t hidden and aren’t in the list above may also be overwritten at any time.

## JavaScript environment

The sandbox that loads your extension guarantees all of the globals available in [ECMAScript 2015 (ES2015)](http://www.ecma-international.org/ecma-262/6.0/). This includes `Set`, `Map`, `Promise`, `Symbol`, and more. You should rely on these globals directly when you need them, and you shouldn't use your own polyfill for any of these features. If you use globals added after ES2015, or new static methods on globals added after ES2015 (like `Object.entries`), then you must polyfill your usage of these features.

Your UI extension shouldn't ship any ES2015 (or newer) syntax, like [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class), [`const/let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), or [`for..of` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of). This syntax isn't understood by some of the browsers that checkout supports. If you use these features in your source code, then make sure that they're compiled to ES5 syntax in your final JavaScript file.

The UI extension sandbox makes a `regeneratorRuntime` instance available globally. This object is provided by [regenerator-runtime](https://github.com/facebook/regenerator/tree/main/packages/runtime), and is used by many compilers to provide an ES5-compatible compilation target for [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) and [async/ await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await). If you use generators or async/ await, then make sure you compile it down to code that uses regenerator-runtime, and make sure you don't import your own version of that polyfill.
