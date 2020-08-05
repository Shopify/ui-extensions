# Container

Each extension point is provided a container API which provides additional methods the extension can use to communicate with Shopify Admin.

## Implementation

| Name               | Type       | Description                                                                              | Required |
| ------------------ | ---------- | ---------------------------------------------------------------------------------------- | -------- |
| close              | `function` | Closes the container and the extension                                                   |          |
| done               | `function` | Notifies Shopify Admin that the extension workflow is complete and data has been updated |          |
| setPrimaryAction   | `function` | Sets the primary action content and callback when the action is clicked                  |          |
| setSecondaryAction | `function` | Sets the secondary action content and callback when the action is clicked                |          |

Below are examples of implementing the data API for the Subscription Management Create extension point.

#### Vanilla

```js
import {render, ExtensionPoint, Button} from '@shopify/argo-admin';

render(ExtensionPoint.SubscriptionManagementCreate, (root, api) => {
  const {
    container: {close, done, setPrimaryAction, setSecondaryAction},
  } = api;

  setPrimaryAction({
    content: 'Save',
    onAction: () => {
      console.log('Saved');
      done();
      close();
    },
  });

  setSecondaryAction({
    content: 'Cancel',
    onAction: () => {
      console.log('Cancelled');
      close();
    },
  });

  const text = root.createComponent(Button, {
    children: 'Hello world',
  });

  root.appendChild(text);
  root.mount();
});
```

#### React

```js
import {render, useContainer, ExtensionPoint, Text} from '@shopify/argo-admin-react';

function App() {
  const container = useContainer();

  useEffect(() => {
    const {close, done, setPrimaryAction, setSecondaryAction} = container;
    setPrimaryAction({
      content: 'Save',
      onAction: () => {
        console.log('Saved');
        done();
        close();
      },
    });

    setSecondaryAction({
      content: 'Cancel',
      onAction: () => {
        console.log('Cancelled');
        close();
      },
    });
  }, [container]);

  return <Text>Hello world</Text>;
}

render(ExtensionPoint.SubscriptionManagementCreate, () => <App />);
```

### Extension Points' Container API

- [Subscription Management](../ExtensionPoints/SubscriptionManagement/README.md#container-api)
