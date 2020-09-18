# Text

The Text component applies styling to your text.
You can also render simple text without styling.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Text} from '@shopify/argo-admin';

extend(ExtensionPoint.MyExtension, (root) => {
  const formattedText = root.createComponent(Text, {
    size: 'small',
    style: 'italic',
    color: 'success',
    alignment: 'center',
  });
  formattedText.appendChild('Formatted text is awesome!');

  const simpleText = root.createText('This simple text is a bit less awesome');

  root.appendChild(formattedText);
  root.appendChild(simpleText);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Text} from '@shopify/argo-admin-react';

function App() {
  return (
    <>
      <Text size="small" style="italic" color="success" alignment="center">
        Formatted text is awesome!
      </Text>
      This simple text is a bit less awesome
    </>
  );
}

extend(
  ExtensionPoint.MyExtension,
  render(() => <App />),
);
```

## Props API

| Name      | Type                                                                                        | Description                               | Required |
| --------- | ------------------------------------------------------------------------------------------- | ----------------------------------------- | -------- |
| size      | `'small'`, `'medium'`, `'titleSmall'`, `'titleMedium'`, `'titleLarge'`, `'titleExtraLarge'` | Size of the text. Defaults to `medium`.   |
| style     | `'normal'`, `'italic'`, `'monospace'`, `'strong'`                                           | Style of the text.                        |          |
| color     | `'primary'`, `'secondary'`, `'warning'`, `'error'`, `'success'`                             | Color of the text. Defaults to `primary`. |          |
| alignment | `'left'`, `'right'`, `'center'`, `'justify'`                                                | Text alignment. Defaults to `left`.       |          |
