# Argo

Argo is the UI extensibility framework for Shopify’s first-party applications. It includes a collection of patterns and libraries that give Shopify a performant, strongly-typed way of providing UI extension points for third-party developers to target.

## I just want to _build_ an Argo extension, not learn about them!

If you’re ready to start building, you’ll want to refer to the documentation covering the components and APIs available to you. Where you’ll find that depends on what surface area of Shopify you are building an extension for:

- Building an extension for the post-purchase page of the Shopify Checkout? You should read the documentation for [`@shopify/argo-post-purchase`](./packages/argo-post-purchase) (and [`@shopify/argo-post-purchase-react`](./packages/argo-post-purchase-react), if you use React)
- Building an extension for other parts of the Shopify Checkout? You should read the documentation for [`@shopify/argo-checkout`](./packages/argo-checkout) (and [`@shopify/argo-checkout-react`](./packages/argo-checkout-react), if you use React)
- Building an extension for the Shopify Admin? You should read the documentation for [`@shopify/argo-admin`](./packages/argo-admin) (and [`@shopify/argo-admin-react`](./packages/argo-admin-react), if you use React)

If you want to learn a little more about the patterns found throughout these libraries, and the way that they are rendered into the application they are extending, read on!

## What is Argo, really?

Argo is the name we give to the patterns we provide for extending our user interfaces. It gives us a short, memorable name to use to refer to the components, APIs, patterns, and the underlying technology that makes these extensions possible. Let’s dig into some of the things that add up to create Argo.

### Open-source core

The underlying technology for Argo is [remote-ui](https://github.com/Shopify/remote-ui), and open source technology built by Shopify. remote-ui provides the basic [message passing](https://github.com/Shopify/remote-ui/tree/main/packages/rpc) system that is used by an Argo extension to communicate with the “host” application it is extending. remote-ui also provides the [component model](https://github.com/Shopify/remote-ui/tree/main/packages/core). If you are familiar with building for the web, remote-ui is very similar to the DOM — it gives you a programmatic model for defining UI components and attaching UI to the screen.

In addition to the basic message passing and component model, remove-ui offers integrations for frameworks like [React](https://github.com/Shopify/remote-ui/tree/main/packages/react) and [Vue](https://github.com/Shopify/remote-ui/tree/main/packages/vue), which we make use of within Argo to provide framework-specific bindings with little additional effort.

### Components

On top of this technical foundation, Argo provides a set of components that extensions can render. In remote-ui, the components your extension renders are actually just tiny JavaScript objects — they don’t have any DOM attached to them at all. These minimal components are sent to the host application to be rendered into native UI. This allows us to expose a minimal API for components that is focused on what you as a developer actually need to do — responding to events or customizing the appearance — while giving Shopify the ability to offer a tightly-optimized, highly-performant set of native UI components in the host application. Because your extension does not render to the actual DOM, Shopify can change or update the components without you needing to take any action, and we can make sure the components fit in seamlessly if they are in a context that allows merchant theming, like Shopify’s Checkout.

The exact components available to the extension depend on the surface area you are embedding — please refer to the [documentation linked above](#i-just-want-to-build-an-argo-extension-not-learn-about-them) for references on what components you can use. If you’ve ever used [Polaris](https://polaris.shopify.com/), though, the components you will find will look extremely familiar, as many components and props are based on their Polaris equivalents.

### Extension points

While remote-ui provides the component model, and takes care of propagating updates to an extension’s UI into the host application, it does not have any built-in notion of an “extension” at all. To create an extension system, Shopify authors a bit of extra code: a mapping of “extension points” (which, in code, are just strings with a specific naming format), and a way to load third party code that can register to be called for those extension points. This might sound little complicated, but the code to put it all together is actually quite straightforward. The Argo ”runtime” code, which is used to construct the sandbox your extension will run in, looks almost exactly like this for all Argo-capable surface areas in Shopify:

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

// Once your script is loaded, it has had its chance to register for extension
// points, and we can now simply call your extension with the arguments from the
// host application, like the data your extension has access to and the UI “root“
// your components will be attached to.
export function run(extensionPoint, ...args) {
  return registeredExtensionPoints.get(extensionPoint)?.(...args);
}
```

In your extension code, you make use of these APIs using patterns that feel idiomatic in JavaScript:

```js
shopify.extend('Checkout::Feature::Render', (root) => {
  root.appendChild(root.createText('Hello world!'));
});

// Or, if you are using our NPM libraries, we offer a bit of sugar over the
// global:

import {extend} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  root.appendChild(root.createText('Hello world!'));
});
```

As with UI components, the Argo extensibility framework lets us provide different arguments to your extension, depending the extension point you selected and other factors, like your app’s permissions. For full details on what arguments are passed for each extension point, please refer to the documentation for the [Argo-supporting surface area you want to extend](#i-just-want-to-build-an-argo-extension-not-learn-about-them).

## Contributing

We provide the libraries in this repo as public NPM packages so that they can be installed and used in your local development. Because the packages are public, we have also made the repo public, so you can more easily refer to the in-code comments we make heavy use of for documenting Argo APIs. However, the code in this repo is not a traditional open source project.

These packages act as the public API Shopify is exposing for UI extensions in our applications, and as a result, we **are not accepting contributions that change or add to these APIs**. Any change to these repos is typically only one part of the full required change, with the rest being done in private Shopify repos that third-party developers do not have access to.

Though we are not accepting contributions that, we’d still love to hear from you! If you have ideas for new components or APIs, please [raise an issue on this repo](https://github.com/Shopify/argo/issues/new/choose). We will also happily accept pull requests for fixing typos in the documentation. If you do raise an issue or PR on this repo, please read [the code of conduct](./CODE_OF_CONDUCT.md), which all contributors must adhere to.
