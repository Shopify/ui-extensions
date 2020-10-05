# Link

Links take users to another place, and usually appear within or directly following a sentence.

In an extension built with Argo, relative links on mobile devices use the Shop domain as the base URL from which you can navigate. For example, https://shop1.myshopify.com is a base URL. Linking to `/admin/products` would navigate to https://shop1.myshopify.com/admin/products.

Links can also be supplied with absolute URLs, e.g. https://shop1.myshopify.com/admin/products.

## Behavior

- 📱 Nest only Text within Link. Other components will be ignored. Nested Text will be used to render the content of the Link

| ✅ Do                                                                     | 🛑 Don't                                              |
| ------------------------------------------------------------------------- | ----------------------------------------------------- |
| 📱 Use `external` to launch URLs with the device browser                  | Inject Javascript into the URL. This will be blocked. |
| 🖥 Use `external` to launch URLs in a new browser tab. Use HTTPS for URLs. |                                                       |

For more guidelines, refer to Polaris' [Link best practices](https://polaris.shopify.com/components/navigation/link#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Link} from '@shopify/argo-admin';

extend('Playground', (root) => {
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

#### React example

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
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name     | Type         | Description                        | Required |
| -------- | ------------ | ---------------------------------- | -------- |
| onPress  | `() => void` | Callback when the link is pressed. |          |
| external | `boolean`    | Makes the link open in a new tab.  |          |
| url      | `string`     | The URL to link to.                |          |
