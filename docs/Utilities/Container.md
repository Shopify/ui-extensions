# Container

Each extension point is provided a container API which provides additional methods the extension can use to communicate with Shopify Admin.

## Subscription Management

| Name  | Type       | Description                                                                            | Required |
| ----- | ---------- | -------------------------------------------------------------------------------------- | -------- |
| close | `function` | Closes the container and the extension                                                 |          |
| done  | `function` | Notify Shopify Admin that the extension workflow is complete and data has been updated |          |

#### Vanilla

```js
import {ExtensionPoint, render, Text, ContainerActions} from '@shopify/argo-admin';

render(ExtensionPoint.SubscriptionManagementCreate, (root, api) => {
  const {
    container: {close, done},
  } = api;

  const containerActions = root.createComponent(ContainerActions, {
    primaryAction: {
      content: 'Save',
      onAction: () => {
        console.log('Saved');
        done();
        close();
      },
    },
    secondaryAction: {
      content: 'Cancel',
      onAction: () => {
        console.log('Cancelled');
        close();
      },
    },
  });
  root.appendChild(containerActions);

  const text = root.createComponent(Text, {
    content: 'Hello world',
  });
  root.appendChild(text);

  root.mount();
});
```

#### React

```js
import {ExtensionPoint, Text, ContainerActions} from '@shopify/argo-admin';
import {render, useContainer} from '@shopify/argo-admin/react';

function App() {
  const {close, done} = useContainer();

  return (
    <Text>Hello world</Text>
    <ContainerActions
      primaryAction={{
        content: 'Save',
        onAction: () => {
          console.log('Saved');
          done();
          close();
        },
      }}
      secondaryAction={{
        content: 'Cancel',
        onAction: () => {
          console.log('Cancelled');
          close();
        },
      }}
    />
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```
