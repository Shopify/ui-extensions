# Rendering

The main feature of most UI extensions is their ability to render UI natively into Shopify’s checkout. UI extensions run in a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), which means they can’t interact with the DOM. Instead of direct DOM manipulation, [extension points](./extension-points.md) that are capable of rendering UI do so by using a library developed by Shopify called [remote-ui](https://github.com/shopify/remote-ui).

remote-ui allows you to create a tree of UI components in a “remote context”, like a web worker. When changes are made to that tree of components, the updates are communicated automatically to the “host” application (Shopify’s checkout, in the case of checkout UI extensions), which can then map that tree to its own, native versions of those components. remote-ui adds special support for [passing functions](https://github.com/Shopify/remote-ui/tree/main/packages/rpc#memory-management) between the remote context and the host application, which is commonly needed in callbacks for UI components.

When this documentation refers to a “rendering” extension point, it means that the extension point provides a [`@remote-ui/core` `RemoteRoot` object](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoteroot) as the first argument. These extension points are expected to use the API of that `RemoteRoot` object to construct their UI from [components explicitly supported by checkout](./components.md), and to update that UI as necessary in response to callbacks.

The `RemoteRoot` API is very similar to the DOM. You create components by calling [`root.createComponent`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoterootcreatecomponent) (comparable to `document.createElement` in the DOM), and you can attach children to the root, or nested components, using methods like [`appendChild`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoterootappendchild) and [`removeChild`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoterootremovechild).

```ts
import {extend, Button} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const button = root.createComponent(
    Button,
    {
      onPress: () => console.log('Pressed!'),
    },
    'Press me',
  );

  root.appendChild(button);
});
```

The `RemoteRoot` API also supports mutating components in the tree after they’ve been attached. The example below shows how the [`updateProps`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remotecomponentupdateprops) and [`updateText`](https://github.com/Shopify/remote-ui/tree/main/packages/core#remotecomponentupdatetext) APIs can be used to respond to user events by updating UI:

```ts
import {extend, Button} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  let pressedTimes = 0;

  const buttonText = root.createText(labelText(0));
  const button = root.createComponent(
    Button,
    {
      onPress: () => {
        pressedTimes += 1;

        if (pressedTimes < 5) {
          buttonText.updateText(labelText(pressedTimes));
        } else {
          buttonText.updateText('That’s enough');
          button.updateProps({
            disabled: true,
            onPress: undefined,
          });
        }
      },
    },
    buttonText,
  );

  root.appendChild(button);
});

function labelText(pressCount: number) {
  return `Pressed ${pressCount} ${pressCount === 1 ? 'time' : 'times'}`;
}
```

This rendering API is intentionally low-level. It provides just enough to express a powerful component model, but no more, which keeps the bundle size of UI extensions to a minimum (the entire `RemoteRoot` and remote procedure call (RPC) libraries at the heart of remote-ui are only 3–4kb gzipped). This design also makes it easy to write adaptors to remote-ui for rendering libraries that can target DOM-like structures. The `@shopify/checkout-ui-extensions` library provides dedicated support for using React to render UI extensions, which is powered by [`@remote-ui/react`’s custom React renderer](https://github.com/Shopify/remote-ui/tree/main/packages/react). Developers building UI extensions can use the `RemoteRoot` API directly, the dedicated React bindings, or any of the other remote-ui renderers, like [`@remote-ui/htm`](https://github.com/Shopify/remote-ui/tree/main/packages/htm).
