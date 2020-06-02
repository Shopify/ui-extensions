# Icon

Icons are used to visually communicate available actions. They can act as wayfinding tools to help merchants more easily understand where they are in the product, and common interaction patterns that are available.

## Examples

#### Vanilla

```js
import {ExtensionPoint, render, Icon} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const icon = root.createComponent(Icon, {
    source: 'cancelSmallMinor',
    color: 'blue',
  });

  icon.appendChild('This is the best extension.');
  root.appendChild(icon);

  root.mount();
});
```

#### React

```jsx
import {ExtensionPoint, Icon} from '@shopify/argo-admin';
import {render} from '@shopify/argo-admin/react';

function App() {
  return <Icon source="cancelSmallMinor" color="blue" />;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name               | Type     | Description                                   | Required |
| ------------------ | -------- | --------------------------------------------- | -------- |
| source             | `Source` | The icon content to display.                  | ☑️       |
| color              | `Color`  | Set the color for the icon fill.              |          |
| accessibilityLabel | `string` | Descriptive text to be read to screenreaders. |          |

### Source

- `'cancelSmallMinor'`
- `'searchMinor'`
- `'starHollow'`
- `'starFilled'`
- `'sortMinor'`

### Color

- `'white'`
- `'black'`
- `'skyLighter'`
- `'skyLight'`
- `'sky'`
- `'skyDark'`
- `'inkLightest'`
- `'inkLighter'`
- `'inkLight'`
- `'ink'`
- `'blueLighter'`
- `'blueLight'`
- `'blue'`
- `'blueDark'`
- `'blueDarker'`
- `'indigoLighter'`
- `'indigoLight'`
- `'indigo'`
- `'indigoDark'`
- `'indigoDarker'`
- `'tealLighter'`
- `'tealLight'`
- `'teal'`
- `'tealDark'`
- `'tealDarker'`
- `'greenLighter'`
- `'green'`
- `'greenDark'`
- `'yellowLighter'`
- `'yellow'`
- `'yellowDark'`
- `'orange'`
- `'redLighter'`
- `'red'`
- `'redDark'`
- `'purple'`
