# Subscription Management Extension

This extension renders in the Product Details and Product Variants Page inside a Modal container.

## Extension Points

Subscription Management has multiple extension points. Each is triggered by a different merchant action, receives different data, and has a different responsibility.

The different extension points are:

- SubscriptionManagementAdd
- SubscriptionManagementCreate
- SubscriptionManagementEdit
- SubscriptionManagementRemove

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

render(ExtensionPoint.SubscriptionManagementAdd);
render(ExtensionPoint.SubscriptionManagementCreate);
render(ExtensionPoint.SubscriptionManagementEdit);
render(ExtensionPoint.SubscriptionManagementRemove);
```

### Data API

See [Data](../../Utilities/Data.md) for more info about how to access subscription data provided by the host page.

#### SubscriptionManagement Add

| Name      | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| productId | `string` | The id of the current product.         |
| variantId | `string` | The id of the current product variant. |

#### SubscriptionManagement Create

| Name      | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| productId | `string` | The id of the current product.         |
| variantId | `string` | The id of the current product variant. |

#### SubscriptionManagement Edit

| Name           | Type     | Description                            |
| -------------- | -------- | -------------------------------------- |
| productId      | `string` | The id of the current product.         |
| variantId      | `string` | The id of the current product variant. |
| sellingGroupId | `string` | The id of the current selling group.   |

#### SubscriptionManagement Remove

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

- [Badge](../../Components/Badge.md)
- [Banner](../../Components/Banner.md)
- [Button](../../Components/Button.md)
- [Checkbox](../../Components/Checkbox.md)
- [Clickable](../../Components/Clickable.md)
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

## Available utilities

- [Container](../../Utilities/Container.md)
- [Layout](../../Utilities/Layout.md)
- [Locale](../../Utilities/Locale.md)
- [Session Token](../../Utilities/SessionToken.md)
- [Toast](../../Utilities/Toast.md)
