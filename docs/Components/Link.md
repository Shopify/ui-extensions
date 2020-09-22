# Link

Links take users to another place, and usually appear within or directly following a sentence.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Link} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
  const link = root.createComponent(Link, {
    url: 'https://shopify.com',
    external: true,
  });
  link.appendChild('The best product ever!');

  const logLink = root.createComponent(Link, {
    onPress: () => console.log('I was pressed'),
  });
  logLink.appendChild('I don’t do much.');

  root.appendChild(link);
  root.appendChild(logLink);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Link} from '@shopify/argo-admin-react';

function App() {
  return (
    <>
      <Link url="https://shopify.com" external>
        The best product ever!
      </Link>
      <Link onPress={() => console.log('I was pressed.')}>I don't do much.</Link>
    </>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name     | Type         | Description                        | Required |
| -------- | ------------ | ---------------------------------- | -------- |
| onPress  | `() => void` | Callback when the link is pressed. |          |
| external | `boolean`    | Makes the link open in a new tab.  |          |
| url      | `string`     | The URL to link to.                |          |
