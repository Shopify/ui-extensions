# Testing

UI Extensions can be tested with any test runner that supports JavaScript. At Shopify, we use [happily use Jest](https://jestjs.io) for all JavaScript testing, but you can use whatever you like, as no testing setup is provided by default. However, the test runner is only one part of the equation. This document outlines how to use the test runner, and some helper libraries provided by Shopify, to write meaningful tests for an extension.

## Non-rendering extension points

A non-rendering extension point, like `Checkout::PostPurchase::ShouldRender`, is really just a function that takes input, and returns output. To test these functions, we recommend you export (instead of writing them as inline callback functions to `shopify.extend`), and call them directly in your tests. If you are using TypeScript, you can use the `ArgumentsForExtension` helper type to get access to the expected types for the inputs to your function, which can be useful to create API-compatible mock data.

Assuming we had an extension like this one:

```ts
// In extension.js

import {extend} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::ShouldRender', handleShouldRenderExtension);

export function handleShouldRenderExtension({storage}) {
  storage.update({myExtensionData: {}});
  return {render: true};
}
```

You could write a test with Jest by importing the extension callback and running it directly:

```ts
// In extension.test.js

import {handleShouldRenderExtension} from './extension';

describe('shouldRender', () => {
  it('stores some data', () => {
    const storage = {update: jest.fn()};

    // To be a little more future-proof, you may want to supply mock values
    // for all the fields this extension receives. For now, we’re just mocking
    // what we know our extension point callback uses.
    handleShouldRenderExtension({storage});

    expect(storage.update).toHaveBeenCalledWith(expect.any(Object));
  });
});
```

## Rendering extension points

A rendering extension point is more complex to test, because these extension points kick off a long-running process where your code can respond to buyer actions with UI updates. Our recommended approach for testing these extensions is to make assertions on the current state of the [`@remote-ui/core` `RemoteRoot` object](https://github.com/Shopify/remote-ui/tree/main/packages/core#remoteroot), which is provided as the first argument for every rendering extension point.

[`@remote-ui/testing`](https://github.com/Shopify/remote-ui/tree/main/packages/testing) is built for exactly this purpose, and it is our recommended approach for testing most UI Extensions. To use it, first install it as a dev dependency using `yarn add @remote-ui/testing --dev` or `npm install @remote-ui/testing --save-dev`. You will again need to separate your extension point callback into a function your test can import, like the example below:

```ts
// In extension.js

import {extend, Button} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', handleRenderExtension);

export function handleRenderExtension(root, api) {
  const text = root.createText('Not pressed');
  const button = root.createComponent(Button, {
    onPress() {
      text.updateText('Pressed!');
      api.done();
    },
  });
  button.appendChild(text);
  root.appendChild(button);
}
```

You can then use [`@remote-ui/testing`’s `mount()` function](https://github.com/Shopify/remote-ui/tree/main/packages/testing#usage) to get a test-friendly `RemoteRoot`, and pass along a mocked value for the extension’s input. The resulting wrapper offers a nice traversal API for inspecting the state of UI, and for triggering updates. The example below shows how to use these features to test the `onPress` behavior in our example above. We are also making use of the [custom matchers](https://github.com/Shopify/remote-ui/tree/main/packages/testing#matchers) provided by the testing library to write easy-to-understand assertions:

```ts
// In extension.test.js

// You’d usually only import this once, in a test setup file, but it’s presented
// here because you need to import it somewhere for these custom matchers to be
// available for tests.
import '@remote-ui/testing/matchers';

import {Button} from '@shopify/post-purchase-ui-extensions';
import {mount} from '@remote-ui/testing';
import {handleRenderExtension} from './extension';

describe('render', () => {
  it('calls done when the button is clicked', () => {
    const done = jest.fn();

    const app = mount((root) => {
      // This is where we are simulating Shopify calling the extension point.
      handleRenderExtension(root, {done});
    });

    // The trigger API allows us to call props on nested components to simulate
    // their effects. It also updates the `app` object with the current state of
    // the UI after the prop has finished executing.
    app.find(Button).trigger('onPress');

    expect(app.find(Button)).toContainRemoteText('Pressed!');
    expect(done).toHaveBeenCalled();
  });
});
```

### Testing React components

React has its own dedicated testing utilities that address some React-specific problems, like ensuring all updates have been applied to the React tree before making assertions. If you are writing your UI extension with React, you will likely find the utilities from `@remote-ui/testing` to be too low-level for your needs. Instead, you can use [`@quilted/react-testing`](https://github.com/lemonmade/quilt/tree/main/packages/react-testing) to test your React components directly. This is Shopify’s React testing library, and it is already built to support testing React in environments without the DOM.
