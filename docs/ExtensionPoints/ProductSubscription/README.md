# Product Subscription Extension

This extension renders in the Product Details and Product Variants Page inside a Modal container.

## Extension Points

Product Subscription has multiple extension points. Each is triggered by a different merchant action, receives different data, and has a different responsibility.

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

See [Container](../../Utilities/Container.md) for more info about how to customize your extension’s container component using the Container API

| Name  | Type       | Description                                                                              | Required |
| ----- | ---------- | ---------------------------------------------------------------------------------------- | -------- |
| close | `function` | Closes the container and the extension                                                   |          |
| done  | `function` | Notifies Shopify Admin that the extension workflow is complete and data has been updated |          |

## Available components

The following components are available for all Product Subscription extension points:

- [Badge](../../Components/Badge.md)
- [Banner](../../Components/Banner.md)
- [Button](../../Components/Button.md)
- [Checkbox](../../Components/Checkbox.md)
- [Pressable](../../Components/Pressable.md)
- [Icon](../../Components/Icon.md)
- [Link](../../Components/Link.md)
- [OptionList](../../Components/OptionList.md)
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
- [Page](../../Components/Page.md)

## Available utilities

- [Container](../../Utilities/Container.md)
- [Data](../../Utilities/Data.md)
- [Layout](../../Utilities/Layout.md)
- [Locale](../../Utilities/Locale.md)
- [Session Token](../../Utilities/SessionToken.md)
- [Toast](../../Utilities/Toast.md)
