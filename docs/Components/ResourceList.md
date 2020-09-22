# ResourceList

A resource list displays a collection of objects of the same type, like products or customers.
The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.

A resource list should contain [ResourceItem](./ResourceItem.md) components.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, ResourceList, ResourceItem} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
  const resourceitem1 = root.createComponent(ResourceItem, {
    id: '1234',
    onPress: () => console.log('Pressed 1'),
  });
  resourceitem1.appendChild('Cool item');
  const resourceitem2 = root.createComponent(ResourceItem, {
    id: '5678',
    onPress: () => console.log('Pressed 2'),
  });
  resourceitem2.appendChild('Cooler item');

  const resourcelist = root.createComponent(ResourceList, {
    filterControl: {
      queryValue: '123';
      queryPlaceholder: 'Filter list';
      onQueryChange: (queryValue) => console.log('Filtering for', queryValue),
      onQueryClear: () => console.log('Clear value'),
    }
  });

  resourcelist.appendChild(resourceitem1);
  resourcelist.appendChild(resourceitem2);

  root.appendChild(resourcelist);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, ResourceList, ResourceItem} from '@shopify/argo-admin-react';

function App() {
  return (
    <ResourceList
      filterControl={
        queryValue: '123',
        queryPlaceholder: 'Filter list',
        onQueryChange: (queryValue) => console.log('Filtering for', queryValue)
        onQueryClear: () => console.log('Clear filters')
      }
    >
      <ResourceItem id="1234" onPress={() => console.log('Pressed 1')}>
        Cool item
      </ResourceItem>
      <ResourceItem id="5678" onPress={() => console.log('Pressed 2')}>
        Cooler item
      </ResourceItem>
    </ResourceList>
  )
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name          | Type            | Description | Required |
| ------------- | --------------- | ----------- | -------- |
| filterControl | `FilterControl` |             |          |

### FilterControl

| Name             | Type               | Description | Required |
| ---------------- | ------------------ | ----------- | -------- |
| queryValue       | `string`           |             |          |
| queryPlaceholder | `string`           |             |          |
| onQueryChange    | `(string) => void` |             | ☑️       |
| onQueryClear     | `() => void`       |             | ☑️       |
