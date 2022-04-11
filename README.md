# UI Extensions

This repo contains the packages that make up the UI extensibility framework for Shopify’s first-party applications. It includes a collection of patterns and libraries that give Shopify a performant, strongly-typed way of providing UI extension points for third-party developers.

## I just want to _build_ a UI Extension, not learn about them!

If you’re ready to start building, you’ll want to refer to the documentation covering the components and APIs available to you. Where you’ll find that depends on what surface area of Shopify you are building an extension for:

- Building an extension for the post-purchase page of the Shopify Checkout? You should read the documentation for [`@shopify/post-purchase-ui-extensions`](./packages/post-purchase-ui-extensions) (and [`@shopify/post-purchase-ui-extensions-react`](./packages/post-purchase-ui-extensions-react), if you use React)
- Building an extension for other parts of the Shopify Checkout? You should read the documentation for [`@shopify/checkout-ui-extensions`](./packages/checkout-ui-extensions) (and [`@shopify/checkout-ui-extensions-react`](./packages/checkout-ui-extensions-react), if you use React)
- Building an extension for the Shopify Admin? You should read the documentation for [`@shopify/admin-ui-extensions`](./packages/admin-ui-extensions) (and [`@shopify/admin-ui-extensions-react`](./packages/admin-ui-extensions-react), if you use React)

If you want to learn a little more about the patterns found throughout these libraries, and the way that they are rendered into the applications they extend, read on!

### Open-source core

The underlying technology for UI Extensions is [remote-ui](https://github.com/Shopify/remote-ui), an open source technology built by Shopify. remote-ui provides the basic [message passing](https://github.com/Shopify/remote-ui/tree/main/packages/rpc) system that is used by UI Extensions to communicate with the “host” application they are extending. remote-ui also provides the [component model](https://github.com/Shopify/remote-ui/tree/main/packages/core) extensions use to describe their UI. If you are familiar with building for the web, remote-ui is very similar to the DOM — it gives you a programmatic model for defining UI components and attaching UI to the screen.

In addition to the basic message passing and component model, remote-ui offers integrations for frameworks like [React](https://github.com/Shopify/remote-ui/tree/main/packages/react) and [Vue](https://github.com/Shopify/remote-ui/tree/main/packages/vue). These integrations are used by UI Extensions to provide framework-specific bindings, allowing developers to use UI frameworks they are already familiar with.

### Components

On top of this technical foundation, UI Extensions provide a set of components that extensions can render. In remote-ui, the components your extension renders are actually just tiny JavaScript objects — they don’t have any DOM attached to them at all. These minimal components are sent to the host application to be rendered into native UI. This allows us to expose a minimal API for components that is focused on what you as a developer actually need to do — responding to events or customizing the appearance — while giving Shopify the ability to offer a highly-optimized set of native UI components in the host application. Because your extension does not render to the actual DOM, Shopify can change or update the components without you needing to take any action. This also gives Shopify the ability to make the components fit in seamlessly if they are in a context that allows merchant theming, like Shopify’s Checkout.

The exact components available to the extension depend on the surface area you are embedding — please refer to the [documentation linked above](#i-just-want-to-build-an-ui-extension-not-learn-about-them) for more details. If you’ve ever used [Polaris](https://polaris.shopify.com/), though, the components you will find will look extremely familiar, as many components and props are based on their Polaris equivalents.

### Extension points

While remote-ui provides the component model, and takes care of propagating updates to the host application, it does not have any built-in notion of an “extension”. To create an extension system, Shopify authors a bit of extra code:

- A mapping of “extension points” which, in code, are just strings with a specific naming format
- A way to load third-party code that can register to be called for those extension points.

These might sound little complicated, but there’s actually very little Shopify code needed construct the “UI Extension sandbox” that manages the extensions. The sandbox is just a slightly more complex version of the following code snippet:

```js
// We keep a mapping of all the extension points you register for
const registeredExtensionPoints = new Map();

// We define a globally-available `shopify` object. The only thing this object
// can do is register an extension (which is just a callback function) for a
// specific extension point.
globalThis.shopify = {
  extend(extensionPoint, extension) {
    registeredExtensionPoints.set(extensionPoint, extension);
  },
};

// Here’s the function the host application will call to load your extension’s
// script into the sandbox
export function load(script) {
  // Internal workings — don’t worry too much about this, because we might change
  // it in the future as new web platform features are available!
}

// Once your script is loaded, it can register callbacks for extension points using `shopify.extend()`.
// The host calls this `run()` function with the public API for this extension point, like the data your
// extension has access to and the UI “root“ your components will be attached to. `run()` then forwards
// the arguments it received to the callback you registered for this extension point.
export function run(extensionPoint, ...args) {
  return registeredExtensionPoints.get(extensionPoint)?.(...args);
}
```

In your extension code, you make use of these APIs using patterns that feel idiomatic in JavaScript:

```js
shopify.extend('Checkout::Dynamic::Render', (root) => {
  root.appendChild(root.createText('Hello world!'));
});

// Or, if you are using our NPM libraries, we offer a bit of sugar over the
// global:

import {extend} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  root.appendChild(root.createText('Hello world!'));
});
```

Your UI Extension will receive different arguments depending on the extension point you’ve selected. The extension API you receive may also be affected by other factors, like your app’s permissions. For full details on what arguments are passed for each extension point, please refer to the documentation for the [Admin and Checkout surface area you want to extend](#i-just-want-to-build-a-ui-extension-not-learn-about-them).

## Contributing

We provide the libraries in this repo as public NPM packages so that they can be installed and used in your local project. Because the packages are public, we have also made the repo public. This way, you can easily refer to the in-code comments we use for documenting UI Extensions APIs. However, the code in this repo is not a traditional open source project.

These packages act as the public API Shopify is exposing for UI Extensions in our applications, and as a result, we **are not accepting contributions that change or add to these APIs**. Any change to these repos is typically only one part of the full required change, with the rest being done in private Shopify repos that third-party developers do not have access to.

Though we are not accepting contributions, we’d still love to hear from you! If you have ideas for new components or APIs, please [raise an issue on this repo](https://github.com/Shopify/ui-extensions/issues/new/choose). We will also happily accept pull requests for fixing typos in the documentation. If you do raise an issue or PR on this repo, please read [the code of conduct](./CODE_OF_CONDUCT.md), which all contributors must adhere to.
