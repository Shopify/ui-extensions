# Session Token

Get a fresh session token for communication with your app's backend.

## Implementation

#### Vanilla

```js
import {render, ExtensionPoint, TextField} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root, api) => {
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

#### React

```js
import {render, useSessionToken, ExtensionPoint, TextField} from '@shopify/argo-admin-react';

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

render(ExtensionPoint.MyExtension, () => <App />);
```

## Session Token API

| Name            | Type                                | Description                | Required |
| --------------- | ----------------------------------- | -------------------------- | -------- |
| getSessionToken | `() => Promise<string | undefined>` | Get a fresh session token. | ☑️       |
