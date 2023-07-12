This API reference describes the technical details of how to build your Post Purchase UI Extensions. It covers the available extension points, including their input and output types and their structure.

For more information, refer to [the post-purchase extension overview](/docs/apps/checkout/product-offers/post-purchase) and [Building a post-purchase checkout extension](/docs/apps/checkout/product-offers/post-purchase/getting-started).

## Extension points

An App Bridge Checkout extension will register for one or more extension points using [`shopify.extend()`](#globals). An extension point in an App Bridge Checkout extension is a plain JavaScript function. This function receives some API for interacting with the application, and is expected to return a value in a specific shape. The input arguments and the output type are different for each extension point.

The current extension points are available for post-purchase:

- [`Checkout::PostPurchase::ShouldRender` and `Checkout::PostPurchase::Render`](/docs/api/checkout-extensions/post-purchase/api), used to build post-purchase interstitials for cross sell applications.

## Configuration file

Post-purchase extensions have a configuration file named `shopify.ui.extension.toml` in the root folder. This file is used for setting up dependencies that your extension needs to run.

For more information about the configuration file, refer to [Post-purchase extensions configuration](/docs/api/checkout-extensions/post-purchase/configuration).

### Development

The configuration file alone won't work in development as Shopify needs to know the file's contents before running the extension. In development, you must pass the configuration as the `config` query parameter.

The command `shopify app serve` outputs the complete string that you must add to a checkout URL, including the contents of the config file. If you use the [browser extension](https://drive.google.com/drive/folders/16l4mJsyElvH8Wb-ggvNmB6NfVWrqOs4J), then it automatically appends the config query string to the checkout URL.

The following example shows a config query string that's appended to the checkout URL:

```text
https://your-test-store.myshopify.com/46071709864/checkouts/a7706e44c6c6b99b9899e1a87d5ec07b/post_purchase?script_url=http://localhost:39351/assets/extension.js&config={"metafields":[{"namespace":"my-namespace","key":"my-key"},{"namespace":"my-namespace","key":"my-key-2"}]}&api_key=myapikey
```

The following example includes the URL-encoded version:

```text
https://your-test-store.myshopify.com/46071709864/checkouts/a7706e44c6c6b99b9899e1a87d5ec07b/post_purchase?script_url=http%3A%2F%2Flocalhost%3A39351%2Fassets%2Fextension.js&config=%7B%22metafields%22%3A%5B%7B%22namespace%22%3A%22my-namespace%22%2C%22key%22%3A%22my-key%22%7D%2C%7B%22namespace%22%3A%22my-namespace%22%2C%22key%22%3A%22my-key-2%22%7D%5D%7D&api_key=myapikey
```

> Note:
> When you update the configuration file, you need to restart your local server for the changes to take effect. Similarly, the browser extension might take up to 60 seconds before appending the updated values. If you don't want to wait, then disabling and then re-enabling the extension forces a refresh.

## Globals

### Shopify-specific globals

The most important API to an App Bridge Checkout extension is `shopify`, an object that is globally available. This object has a single method, `extend` that takes two arguments. One is the name of an [available extension point](#extension-points), and the other is a function to call when Shopify is ready to run the extension point. The function you pass is called with at least one input argument, depending on the extension point. Refer to the documentation for the extension point you are targeting to see what you have access to.

```ts
shopify.extend('Checkout::PostPurchase::ShouldRender', (...args) => {
  // Implement your Checkout::PostPurchase::ShouldRender extension point logic here
});
```

This library provides an alias for `shopify.extend` in the form of the `extend()` export. This function is also strongly-typed. If you’re working in an editor that supports TypeScript’s language server (we recommend [VSCode](https://code.visualstudio.com)), then you get feedback about the input arguments to that extension point.

```ts
import {extend} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::ShouldRender', (api) => {
  // Implement your Checkout::PostPurchase::ShouldRender extension point logic here
  // If you hover over `api` in an editor that supports TypeScript, you’ll see
  // the properties and methods available for this extension point, even if you
  // are writing your extension in "vanilla" JavaScript.
});
```

For extensions that render UI, like [`Checkout::PostPurchase::ShouldRender`](#extension-points), the first argument is always a [`@remote-ui` `RemoteRoot` object](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoteroot) that allows you to render UI components into your extension point in checkout. You do not need to explicitly call [`mount()`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoterootmount) on this object; once the callback you registered for this extension point ends (or, if it returns a `Promise`, once that promise resolves), your initial UI will be rendered.

That’s really all the global API you need to know to start writing a UI extension. You’ll find the documentation for additional APIs that are provided when an extension point is run in the [extension points documentation](#extension-points).

### Web platform globals

UI Extensions in Checkout post-purchase always run in a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). This environment has access to many of the same globals as you’d get with JavaScript running in a browser. However, we only guarantee the presence of the following globals:

- [`self`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self), a reference back to the global object.
- [`console`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/console), which is the same `console` available in the browser and can be used for printing to the browser’s console. Your app shouldn't log any content when running in production.
- [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [`clearTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout), [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), and [`clearInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval), which behave the same as they do outside a web worker
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) and related globals ([`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers), [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request), and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)), which can be used to make HTTP requests to arbitrary endpoints. Any requests you make must explicitly support [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Glossary/CORS), just as they would if the request were coming from `fetch()` outside of a web worker.

You must not rely on any other globals being available. Many will be explicitly overwritten to be `undefined` in the sandbox, and non-language globals that aren’t hidden and aren’t in the list above may also be overwritten at any time.

### JavaScript environment

> Note:
> If you're using [`@shopify/checkout-ui-extensions-run`](https://www.npmjs.com/package/@shopify/checkout-ui-extensions-run) to build and develop your script, then all of the build configuration discussed in this section is handled for you — just try to be mindful if you are relying on very new language features that will require additional polyfills. `@shopify/checkout-ui-extensions-run` is the default build and dev tool you get when generating your extension with the Shopify App CLI, so if you’re not sure if you’re using it, you probably are.

The sandbox that loads your extension guarantees all of the globals available in [ECMAScript 2015 (ES2015)](http://www.ecma-international.org/ecma-262/6.0/). This includes `Set`, `Map`, `Promise`, `Symbol`, and more. You should rely on these globals directly when you need them, and you should not use your own polyfill for any of these features. If you use globals added after ES2015, or new static methods on globals added after ES2015 (like `Object.entries`), you must polyfill your usage of these features.

Your UI extension should not ship any ES2015 (or newer) syntax, like [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class), [`const/let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), or [`for..of` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of). This syntax is not understood by some of the browsers that checkout supports. If you use these features in your source code, make sure they are compiled to ES5 syntax in your final JavaScript file.

The UI sandbox makes a `regeneratorRuntime` instance available globally. This object is provided by [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime), and is used by many compilers to provide an ES5-compatible compilation target for [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) and [async/ await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await). If you use generators or async/ await, make sure you compile it down to code that uses regenerator-runtime, and make sure you do not import your own version of that polyfill.
