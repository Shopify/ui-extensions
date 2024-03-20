# How extensions work

## Open-source core

The underlying technology for UI Extensions is [remote-dom](https://github.com/Shopify/remote-dom), an open source technology built by Shopify. remote-dom provides the basic [message passing](https://github.com/Shopify/remote-dom/tree/main/packages/signals) system that is used by UI Extensions to communicate with the “host” application they are extending. remote-dom also provides the [component model](https://github.com/Shopify/remote-dom/tree/main/packages/core) extensions use to describe their UI. If you are familiar with building for the web, remote-dom is very similar to the DOM — it gives you a programmatic model for defining UI components and attaching UI to the screen.

In addition to the basic message passing and component model, remote-dom offers integrations for frameworks like [React](https://github.com/Shopify/remote-dom/tree/main/packages/react) and [Vue](https://github.com/Shopify/remote-dom/tree/main/packages/vue). These integrations are used by UI Extensions to provide framework-specific bindings, allowing developers to use UI frameworks they are already familiar with.

## Components

On top of this technical foundation, UI Extensions provide a set of components that extensions can render. In remote-dom, the components your extension renders are actually just tiny JavaScript objects — they don’t have any DOM attached to them at all. These minimal components are sent to the host application to be rendered into native UI. This allows us to expose a minimal API for components that is focused on what you as a developer actually need to do — responding to events or customizing the appearance — while giving Shopify the ability to offer a highly-optimized set of native UI components in the host application. Because your extension does not render to the actual DOM, Shopify can change or update the components without you needing to take any action. This also gives Shopify the ability to make the components fit in seamlessly if they are in a context that allows merchant theming, like Shopify’s Checkout.

The exact components available to the extension depend on the surface area you are embedding — please refer to the [main README for this package](../README.md) for more details. If you’ve ever used [Polaris](https://polaris.shopify.com/), though, the components you will find will look extremely familiar, as many components and props are based on their Polaris equivalents.

## Extension points

While remote-dom provides the component model, and takes care of propagating updates to the host application, it does not have any built-in notion of an “extension”. To create an extension system, Shopify authors a bit of extra code:

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

In your extension code, you make use of these APIs implicitly when you export your extension code as a default export. Shopify uses the information you provide in your `shopify.ui.extension.toml` file to determine which extension point you are targeting, and automatically calls the `shopify.extend()` function to register your code.

```js
import {extensions} from '@shopify/ui-extensions/checkout';

export default extensions('Checkout::Dynamic::Render', (root) => {
  root.append(root.createText('Hello world!'));
});
```

Your UI Extension will receive different arguments depending on the extension point you’ve selected. The extension API you receive may also be affected by other factors, like your app’s permissions. For full details on what arguments are passed for each extension point, please refer to the documentation for the [area of Shopify you want to extend](#i-just-want-to-build-a-ui-extension-not-learn-about-them).
