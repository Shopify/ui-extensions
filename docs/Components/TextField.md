# TextField

TextField is an input field that merchants can type into.
It has a range of options and supports several input formats including numbers.

## Behavior

- TextFields will expand to the width of the container

| ✅ Do                                                                       | 🛑 Don't                         |
| --------------------------------------------------------------------------- | -------------------------------- |
| 📱 Vertically align your TextFields, rather than horizontally aligning them | 📱 Horizontally stack TextFields |
| Use TextField to capture merchant text input                                |                                  |

For more guidelines, refer to Polaris' [Text Field best practices](https://polaris.shopify.com/components/forms/text-field#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, TextField} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const textfield = root.createComponent(TextField, {
    label: 'Super text field',
    type: 'text',
    value: 'I can fly!',
    placeholder: 'Type a thing',
    multiline: 3,
    prefix: 'I typed:',
    suffix: 'into this text field',
    error: 'I hate to break this to you, but you cannot fly',
    onChange: (value) => console.log(value, ' was typed'),
    onInput: (value) => console.log(value, ' was typing'),
    onFocus: () => console.log('Welcome to the super field!'),
    onBlur: () => console.log('Left to do something else'),
    clearButton: true,
    onClearButtonPress: () => console.log('Clear that silly statement'),
  });

  root.appendChild(textfield);
  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, TextField} from '@shopify/argo-admin-react';

function App() {
  return (
    <TextField
      label="Super text field"
      type="text"
      value="I can fly!"
      placeholder="Type a thing"
      multiline={3}
      prefix="I typed:"
      suffix="into this text field"
      error="I hate to break this to you, but you cannot fly"
      onChange={(value) => console.log(value, ' was typed')}
      onInput={(value) => console.log(value, ' was typing')}
      onFocus={() => console.log('Welcome to the super field!')}
      onBlur={() => console.log('Left to do something else')}
      clearButton
      onClearButtonPress={() => console.log('Clear that silly statement')}
    />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name               | Type                             | Description                            | Required |
| ------------------ | -------------------------------- | -------------------------------------- | -------- |
| label              | `string`                         | Label for the input.                   | ☑️       |
| type               | `'text'`, `'search'`, `'number'` | Type of the input.                     |          |
| value              | `string`                         | Initial value for the input.           |          |
| placeholder        | `string`                         | Hint text to display.                  |          |
| multiline          | `number`, `boolean`              | Allow for multiple lines of input.     |          |
| prefix             | `string`                         | Text to display before the value.      |          |
| suffix             | `string`                         | Text to display after the value.       |          |
| error              | `string`                         | Error to display beneath the label.    |          |
| onInput            | `(string) => void`               | Callback when value is changed.        |          |
| onChange           | `(string) => void`               | Callback when user leaves the input.   |          |
| onFocus            | `() => void`                     | Callback when input is focused.        |          |
| onBlur             | `() => void`                     | Callback when focus is removed.        |          |
| clearButton        | `boolean`                        | Show a clear text button in the input. |          |
| onClearButtonPress | `() => void`                     | Callback when clear button is pressed. |          |
