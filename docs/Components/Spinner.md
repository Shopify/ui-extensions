# Spinner

Spinners are used to show merchants that your app is loading, or an action is being performed. Generally when a spinner is being used, the user shouldn't be able to interact with the app.

| ✅ Do                                                                        | 🛑 Don't                                                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Use Spinner to show that content is loading, or an action is being processed | Spinners should be independent, don’t place Spinners for each loading element, rather Spinners should be at the top level of the section they apply to |

For more guidelines, refer to Polaris' [Spinner best practices](https://polaris.shopify.com/components/feedback-indicators/spinner#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Spinner} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const spinner = root.createComponent(Spinner);
  root.appendChild(spinner);

  setTimeout(() => {
    root.removeChild(spinner);
  }, 2000);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Spinner} from '@shopify/argo-admin-react';

function App() {
  return <Spinner />;
}

extend(
  'Playground',
  render(() => <App />),
);
```
