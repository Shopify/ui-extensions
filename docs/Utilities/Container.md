# Container

Each extension point is provided a container API which provides additional methods the extension can use to communicate with Shopify Admin.

## Subscription Management

| Name               | Type       | Description                                                                            | Required |
| ------------------ | ---------- | -------------------------------------------------------------------------------------- | -------- |
| close              | `function` | Closes the container and the extension                                                 |          |
| done               | `function` | Notify Shopify Admin that the extension workflow is complete and data has been updated |          |
| setPrimaryAction   | `function` | Sets the primary action content and callback when the action is clicked                |          |
| setSecondaryAction | `function` | Sets the secocndary action content and callback when the action is clicked             |          |

#### Vanilla

```js
import {ExtensionPoint, render, Button} from '@shopify/argo-admin';

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
import {ExtensionPoint, Text} from '@shopify/argo-admin';
import {render, useContainer} from '@shopify/argo-admin/react';

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

render(ExtensionPoint.MyExtension, () => <App />);
```
