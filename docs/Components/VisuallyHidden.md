# VisuallyHidden

Use `VisuallyHidden` when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden. It is the logical opposite of the `aria-hidden` attribute.

In the following example, screen readers will announce "Save" and will ignore the icon; the browser displays the icon and ignores the text.

```
<button>
  <VisuallyHidden>Save</VisuallyHidden>
  <svg aria-hidden width="32" height="32">
    <path d="..."></path>
  </svg>
</button>
```

| ✅ Do                                                                                | 🛑 Don't                                                                                    |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Use to expose meaningful content to screen readers when semantic markup isn't enough | Use if semantic markup can make content understandable to people using assistive technology |

Also refer to Polaris' [VisuallyHidden best practices](https://github.com/Shopify/polaris-react/tree/main/src/components/VisuallyHidden#best-practices).

## Examples

#### Vanilla Javascript

```js
import {extend, ExtensionPoint, Text, VisuallyHidden} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const visuallyHidden = root.createComponent(VisuallyHidden);
  const text = root.createComponent(Text);
  text.appendChild('Update Record');
  visuallyHidden.appendChild(text);

  root.appendChild(visuallyHidden);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, VisuallyHidden} from '@shopify/argo-admin-react';

function App() {
  return <VisuallyHidden>Update Record</VisuallyHidden>;
}

extend(
  'Playground',
  render(() => <App />),
);
```
