import {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  // The title of the page.
  title: 'Extension Points',
  // A short description of the page. Appears in the hero section below the title.
  description:
    'A checkout UI extension will register for one or more extension points using `shopify.extend()`. An extension point in a UI extension is a plain JavaScript function. This function receives an API object for interacting with the application, and is expected to return a value in a specific shape. The input arguments and the output type are different for each extension point.',
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm id matches the reference name.
  id: 'extension-points-overview',
  // Basic content for the page and Hero section.
  sections: [
    {
      type: 'Generic',
      // Anchor link for the section.
      anchorLink: 'static-extension-points',
      // The title of the section.
      title: 'Static extension points',
      // Content for the section.
      image: 'static-extension-points.png',
      sectionContent: `Static extension points render immediately before or after most core checkout features such as contact information, shipping methods, and order summary line items. Merchants use the [checkout editor](/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor) to activate and place the extension in the checkout experience.
      \n\nWhen a core checkout feature isn't rendered, neither are the static extension points tied to it. For example, shipping methods aren't shown when customers select the option for store pickup and the UI extensions that load before or after the shipping method aren't rendered.
      \n\nChoose static extension points when your content and functionality is closely related to a core checkout feature. An example is a shipping delay notice.
      `,
      sectionCard: [
        {
          name: 'Extension points',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/apis/extensionpoints',
          type: 'blocks',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'dynamic-extension-points',
      title: 'Dynamic extension points',
      sectionContent: `Dynamic extension points aren't tied to specific checkout features. They can render between core features on any checkout step. Merchants can use the [checkout editor](/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor) to place the extension in any one of the [supported locations](/docs/api/checkout-ui-extensions/extension-points-overview#supported-locations) for the dynamic extension point.
      \n\nWhen a checkout feature for that location is hidden, dynamic extensions are still rendered. For example, an extension placed above the shipping address will still render even for digital products which do not require a shipping address.\n\nChoose dynamic extension points when your content and functionality is self-contained and can display at any step in the checkout process. An example is a field to capture order notes from the customer.`,
      image: 'dynamic-extension-points.png',
      sectionCard: [
        {
          name: 'Extension points',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/apis/extensionpoints',
          type: 'blocks',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Supported locations',
      anchorLink: 'supported-locations',
      accordionContent: [
        {
          title: 'Information',
          description: `
This is the first step in the checkout process where the buyer enters contact information and a delivery address.

See [all extensions points](/docs/api/checkout-ui-extensions/apis/extensionpoints).
`,
          image: 'supported-locations-information.png',
        },
        {
          title: 'Shipping',
          description: `
Point in checkout where the buyer selects a shipping method.

See [all extensions points](/docs/api/checkout-ui-extensions/apis/extensionpoints).
`,
          image: 'supported-locations-shipping.png',
        },
        {
          title: 'Payment',
          description: `
Point in checkout where the buyer enters their payment information.

See [all extensions points](/docs/api/checkout-ui-extensions/apis/extensionpoints).
`,
          image: 'supported-locations-payment.png',
        },
        {
          title: 'Order summary',
          description: `
Summary of the cart contents, discounts, and order totals.

See [all extensions points](/docs/api/checkout-ui-extensions/apis/extensionpoints).
`,
          image: 'supported-locations-order-summary.png',
        },
        {
          title: 'Shop Pay',
          description: `
Accelerated checkout where Shopify pre-fills buyer information using their Shop Pay account.

See [all extensions points](/docs/api/checkout-ui-extensions/apis/extensionpoints).
`,
          image: 'supported-locations-shop-pay.png',
        },
        {
          title: 'Order Status',
          description: `
After submitting their order, the buyer is taken to an order status page.

See [all extensions points](/docs/api/checkout-ui-extensions/apis/extensionpoints).
`,
          image: 'supported-locations-order-status.png',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'globals',
      title: 'Globals',
      sectionContent:
        "The `checkout-ui-extensions` library provides an alias for `shopify.extend` in the form of the `extend()` export. This function is also strongly-typed. If you’re working in an editor that supports TypeScript’s language server (we recommend [VSCode](https://code.visualstudio.com)), then you get feedback about the input arguments to that extension point. \n\n For extensions that render UI, such as [`Checkout::Dynamic::Render`](#extension-points), the first argument is always a [`@remote-ui` `RemoteRoot` object](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoteroot) that enables you to render UI components into your extension point in checkout. You don't need to explicitly call [`mount()`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoterootmount) on this object. After the callback that you registered for the extension point ends, or if it returns a `Promise` that resolves, your initial UI is rendered.",
      sectionCard: [
        {
          name: 'Extension points',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/apis/extensionpoints',
          type: 'blocks',
        },
        {
          name: 'Standard API',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/apis/standardapi',
          type: 'blocks',
        },
      ],
      sectionSubContent: [
        {
          title: 'Web platform globals',
          sectionContent:
            'Checkout UI extensions always run in a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). This environment has access to many of the same globals as you’d get with JavaScript running in a browser. However, we only guarantee the presence of the following globals: \n\n - [`self`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self), a reference back to the global object. \n - [`console`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/console), which is the same `console` available in the browser and can be used for printing to the browser’s console (**Note**: your app **should not** log any content when running in production) \n - [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [`clearTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout), [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), and [`clearInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval), which behave the same as they do outside a web worker \n - [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) and related globals ([`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers), [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request), and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)), which can be used to make HTTPS requests to arbitrary endpoints (**Note**: any requests you make must explicitly support [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Glossary/CORS), just as they would if the request were coming from `fetch()` outside of a web worker) \n\n > Caution: \n > You **must not** rely on any other globals being available. Many will be explicitly overwritten to be `undefined` in the sandbox, and non-language globals that aren’t hidden and aren’t in the list above may also be overwritten at any time.',
        },
        {
          title: 'JavaScript environment',
          sectionContent:
            "The sandbox that loads your extension guarantees all of the globals available in [ECMAScript 2015 (ES2015)](http://www.ecma-international.org/ecma-262/6.0/). This includes `Set`, `Map`, `Promise`, `Symbol`, and more. You should rely on these globals directly when you need them, and you shouldn't use your own polyfill for any of these features. If you use globals added after ES2015, or new static methods on globals added after ES2015 (like `Object.entries`), then you must polyfill your usage of these features. \n\n Your UI extension shouldn't ship any ES2015 (or newer) syntax, like [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class), [`const/let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), or [`for..of` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of). This syntax isn't understood by some of the browsers that checkout supports. If you use these features in your source code, then make sure that they're compiled to ES5 syntax in your final JavaScript file. \n\n The UI extension sandbox makes a `regeneratorRuntime` instance available globally. This object is provided by [regenerator-runtime](https://github.com/facebook/regenerator/tree/main/packages/runtime), and is used by many compilers to provide an ES5-compatible compilation target for [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) and [async/ await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await). If you use generators or async/ await, then make sure you compile it down to code that uses regenerator-runtime, and make sure you don't import your own version of that polyfill.",
        },
      ],
      codeblock: {
        title: 'extend()',
        tabs: [
          {
            code: './examples/extend-js.ts',
            language: 'ts',
          },
        ],
      },
    },
  ],
};

export default data;
