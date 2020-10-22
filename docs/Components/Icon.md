# Icon

Icons are small visual indicators from a set of pre-defined glyphs.

| ✅ Do                                                                                                                           | 🛑 Don't                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Use Icons to provide visual indicators to your actions, such as sorting and searching                                           | Use the same accessibility label for every Icon |
| Use a unique accessibility label that describes the Icon, so that the merchants device’s screen reader can announce the content |                                                 |

For more guidelines, refer to Polaris' [Icon related guidelines](https://polaris.shopify.com/components/images-and-icons/icon#section-related-guidelines).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Icon} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const icon = root.createComponent(Icon, {
    source: 'cancelSmallMinor',
  });

  icon.appendChild('This is the best extension.');
  root.appendChild(icon);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Icon} from '@shopify/argo-admin-react';

function App() {
  return <Icon source="cancelSmallMinor" />;
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name               | Type     | Description                                   | Required |
| ------------------ | -------- | --------------------------------------------- | -------- |
| source             | `Source` | The icon content to display.                  | ☑️       |
| accessibilityLabel | `string` | Descriptive text to be read to screenreaders. |          |

### Source

- `'cancelSmallMinor'`
- `'searchMinor'`
- `'starHollow'`
- `'starFilled'`
- `'sortMinor'`
