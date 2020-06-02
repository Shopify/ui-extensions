# Layout

You can use the Layout utility to adjust your content based on the user's screen size.

## Implementation

#### Vanilla

```js
import {ExtensionPoint, render, Text} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root, api) => {
  const {layout} = api;
  const currentLayoutText = root.createComponent(Text, {
    children: `The current layout is: ${layout.initialValue.horizontal}`,
  });

  layout.setOnChange((newLayout) => {
    currentLayoutText.updateProps({children: `The current layout is: ${newLayout.horizontal}`});
  });

  root.appendChild(currentLayoutText);
  root.mount();
});
```

#### React

```js
import {ExtensionPoint, Text} from '@shopify/argo-admin';
import {render, useLayout} from '@shopify/argo-admin/react';

function App() {
  const layout = useLayout();

  return <Text>{`The current layout is: ${layout.horizontal}`}</Text>;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Layout API

`layout`

| Name       | Type                      | Description                                                      | Required |
| ---------- | ------------------------- | ---------------------------------------------------------------- | -------- |
| horizontal | `'regular'`,`'compact'`   | Size of the page.                                                |          |
| setHandler | `(layoutHandler) => void` | Callback to run when the layout changes. Not relevant for React. |          |
