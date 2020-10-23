# Product Subscription Extension

This extension renders in the Product Details and Product Variants Page inside a **Modal container** or **App overlay** container.

## Extension Points

The Product subscription extension uses multiple extension points. Each is triggered by a different merchant action, receives different data, and is responsible for handling a distinct part of the subscriptions experience.

The different extension points are:

- `Admin::Product::SubscriptionPlan::Add`
- `Admin::Product::SubscriptionPlan::Create`
- `Admin::Product::SubscriptionPlan::Edit`
- `Admin::Product::SubscriptionPlan::Remove`

They must be rendered separately.

```js
function Add(root, api) {
  root.appendChild(root.createText('Hello, World'));
  root.mount();
}
function Create() {
  /* ... */
}
function Edit() {
  /* ... */
}
function Remove() {
  /* ... */
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <Add />),
);
extend(
  'Admin::Product::SubscriptionPlan::Create',
  render(() => <Create />),
);
extend(
  'Admin::Product::SubscriptionPlan::Edit',
  render(() => <Edit />),
);
extend(
  'Admin::Product::SubscriptionPlan::Remove',
  render(() => <Remove />),
);
```

### Data API

See [Data](../../Utilities/Data.md) for more info about how to access subscription data provided by the host page.

- `variantId` is null except in the context of the Variant admin page. It specifies which variant should be removed from the SellingPlanGroup association.
- `variantIds` is used in the context of the Product admin page. Since plans can be associated to the Product either directly at the product-level or indirectly at the variant-level, we want all of those associations to be removed when a merchant clicks remove. So, any association between the SellingPlanGroup and productId should be removed and all associations between the SellingPlanGroup and the variants within `variantIds` should be removed

#### ProductSubscription Add

| Name      | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| productId | `string` | The id of the current product.         |
| variantId | `string` | The id of the current product variant. |

#### ProductSubscription Create

| Name      | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| productId | `string` | The id of the current product.         |
| variantId | `string` | The id of the current product variant. |

#### ProductSubscription Edit

| Name           | Type     | Description                            |
| -------------- | -------- | -------------------------------------- |
| productId      | `string` | The id of the current product.         |
| variantId      | `string` | The id of the current product variant. |
| sellingGroupId | `string` | The id of the current selling group.   |

#### ProductSubscription Remove

| Name           | Type       | Description                              |
| -------------- | ---------- | ---------------------------------------- |
| productId      | `string`   | The id of the current product.           |
| variantId      | `string`   | The id of the current product variant.   |
| variantIds     | `string[]` | The ids of the current product variants. |
| sellingGroupId | `string`   | The id of the current selling group.     |

### Container API

See [Container](../../Utilities/Container.md) for more info about how to customize your extension’s container component using the Container API.

There are two different container types for the Product subscription extension, depending on the extension mode:

#### Add, Remove

**App modal container**: A smaller overlay typically used for editing an existing configuration or confirming a change. In the app modal container, primary and secondary action buttons are responsible for triggering a custom behavior, such as performing a resource update.

#### Create, Edit

**App overlay container**: A full-screen container designed for complex tasks, like configuring a subscription for the first time.

#### Add, Remove (Modal container)

| Name               | Type       | Description                                                                                                                            | Required |
| ------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| close              | `function` | Closes the container and the extension                                                                                                 |          |
| done               | `function` | Notify Shopify Admin that the extension workflow is complete and data has been updated. It also closes the conatiner and the extension |          |
| setPrimaryAction   | `Action`   | Sets the primary action                                                                                                                |          |
| setSecondaryAction | `Action`   | Sets the secondary action                                                                                                              |          |

##### Action

| Name     | Type         | Description              | Required |
| -------- | ------------ | ------------------------ | -------- |
| content  | `string`     | Action label text.       | ☑️       |
| onAction | `() => void` | Callback for the action. |          |

##### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Button} from '@shopify/argo-admin';

extend(ExtensionPoint.SubscriptionManagementAdd, (root, api) => {
  const {
    container: {close, done, setPrimaryAction, setSecondaryAction},
  } = api;

  setPrimaryAction({
    content: 'Add',
    onAction: () => {
      console.log('Added');
      done();
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

##### React example

```jsx
import {extend, render, useContainer, ExtensionPoint, Text} from '@shopify/argo-admin-react';

function App() {
  const container = useContainer();

  useEffect(() => {
    const {close, done, setPrimaryAction, setSecondaryAction} = container;
    setPrimaryAction({
      content: 'Save',
      onAction: () => {
        console.log('Saved');
        done();
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

extend(
  ExtensionPoint.SubscriptionManagementAdd,
  render(() => <App />),
);
```

#### Create, Edit (App overlay container)

| Name  | Type       | Description                                                                                                                            | Required |
| ----- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| close | `function` | Closes the container and the extension                                                                                                 |          |
| done  | `function` | Notify Shopify Admin that the extension workflow is complete and data has been updated. It also closes the conatiner and the extension |          |

##### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Button} from '@shopify/argo-admin';

extend(ExtensionPoint.SubscriptionManagementEdit, (root, api) => {
  const {
    container: {close, done},
  } = api;

  const primaryButton = root.createComponent(Button, {
    title: 'Edit plan',
    primary: true,
    onClick: () => {
      console.log('Updated');
      done();
    },
  });

  const secondaryButton = root.createComponent(Button, {
    title: 'Cancel',
    onClick: () => {
      console.log('Cancelled');
      close();
    },
  });

  const text = root.createComponent(Button, {
    children: 'Hello world',
  });

  root.appendChild(text);
  root.appendChild(secondaryButton);
  root.appendChild(primaryButton);
  root.mount();
});
```

##### React example

```jsx
import {extend, render, useContainer, ExtensionPoint, Text} from '@shopify/argo-admin-react';

function App() {
  const {close, done} = useContainer();

  const onPrimaryAction = useCallback(() => {
    console.log('Updated');
    done();
  }, [getSessionToken, done]);

  const onSecondaryAction = useCallback(() => {
    console.log('Cancelled');
    close();
  }, [getSessionToken, close]);

  const actions = useMemo(
    () => (
      <>
        <Button title="Cancel" onClick={onSecondaryAction} />
        <Button title="Edit plan" onClick={onPrimaryAction} primary />
      </>
    ),
    [onPrimaryAction, onSecondaryAction],
  );

  return (
    <>
      <Text>Hello world</Text>
      {actions}
    </>
  );
}

extend(
  ExtensionPoint.SubscriptionManagementEdit,
  render(() => <App />),
);
```

## Available components

The following components are available for all Product Subscription extension points:

- [Badge](../../Components/Badge.md)
- [Banner](../../Components/Banner.md)
- [Button](../../Components/Button.md)
- [Checkbox](../../Components/Checkbox.md)
- [Pressable](../../Components/Pressable.md)
- [Icon](../../Components/Icon.md)
- [Link](../../Components/Link.md)
- [Radio](../../Components/Radio.md)
- [ResourceItem](../../Components/ResourceItem.md)
- [ResourceList](../../Components/ResourceList.md)
- [Select](../../Components/Select.md)
- [Spinner](../../Components/Spinner.md)
- [Stack](../../Components/Stack.md)
- [StackItem](../../Components/StackItem.md)
- [Text](../../Components/Text.md)
- [TextField](../../Components/TextField.md)
- [Thumbnail](../../Components/Thumbnail.md)

The following components are available only for Product Subscription Create and Edit extension points:

- [Card](../../Components/Card.md)
- [CardSection](../../Components/CardSection.md)
- [Modal](../../Components/Modal.md)

## Available utilities

- [Container](../../Utilities/Container.md)
- [Data](../../Utilities/Data.md)
- [Layout](../../Utilities/Layout.md)
- [Locale](../../Utilities/Locale.md)
- [Session Token](../../Utilities/SessionToken.md)
- [Toast](../../Utilities/Toast.md)
