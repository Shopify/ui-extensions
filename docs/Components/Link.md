# Link

Links take users to another place, and usually appear within or directly following a sentence.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Link} from '@shopify/argo-admin';

extend(ExtensionPoint.MyExtension, (root) => {
  const link = root.createComponent(Link, {
    url: 'https://shopify.com',
    external: true,
  });
  link.appendChild('The best product ever!');

  const logLink = root.createComponent(Link, {
    onClick: () => console.log('I was clicked'),
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
      <Link onClick={() => console.log('I was clicked.')}>I don't do much.</Link>
    </>
  );
}

extend(
  ExtensionPoint.MyExtension,
  render(() => <App />),
);
```

## Props API

| Name     | Type         | Description                        | Required |
| -------- | ------------ | ---------------------------------- | -------- |
| onClick  | `() => void` | Callback when the link is clicked. |          |
| external | `boolean`    | Makes the link open in a new tab.  |          |
| url      | `string`     | The URL to link to.                |          |
