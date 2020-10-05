# Text

The Text component is used to render text in different sizes, colors, and alignments.

## Behavior

📱 Do not nest other components other than Text, they will be ignored and not rendered. Nested Text will be used to render the content of Text

| ✅ Do                                          | 🛑 Don't |
| ---------------------------------------------- | -------- |
| Use Text to add rich content to your extension |          |
| Use size to (de)-emphasize your content        |          |

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Text} from '@shopify/argo-admin';

extend('Playground', (root) => {
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

#### React example

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
  'Playground',
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
