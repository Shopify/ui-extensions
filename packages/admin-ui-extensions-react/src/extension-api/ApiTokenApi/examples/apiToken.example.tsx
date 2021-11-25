import React, {useState, useEffect} from 'react';
import {
  extend,
  render,
  useApiToken,
  TextField,
  TokenPayload,
} from '@shopify/admin-ui-extensions-react';

function App() {
  const {getApiToken} = useApiToken();
  const [token, setToken] = useState<TokenPayload | undefined>();

  useEffect(() => {
    getApiToken().then((newToken) => {
      setToken(newToken);
    });
  }, []);

  return <TextField label="Api Token" value={token.accessToken} disabled />;
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
