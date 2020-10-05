# Session Token

Get a fresh session token for communication with your app's backend service. Calls to Shopify APIs must be made by your app’s backend service.

## Implementation

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, TextField} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {sessionToken} = api;
  const text = root.createComponent(TextField, {
    disabled: true,
    value: '',
    label: 'Session Token',
  });

  sessionToken.getSessionToken().then((newToken) => {
    text.updateProps({
      value: newToken,
    });
  });

  root.appendChild(text);
  root.mount();
});
```

#### React example

```js
import {
  extend,
  render,
  useSessionToken,
  ExtensionPoint,
  TextField,
} from '@shopify/argo-admin-react';

function App() {
  const {getSessionToken} = useSessionToken();
  const [token, setToken] = useState('');

  useEffect(() => {
    getSessionToken().then((newToken) => {
      setToken(newToken);
    });
  }, []);

  return <TextField label="Session Token" value={token} disabled />;
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Session Token API

| Name            | Type                                 | Description                | Required |
| --------------- | ------------------------------------ | -------------------------- | -------- |
| getSessionToken | `() => Promise<string \| undefined>` | Get a fresh session token. | ☑️       |
