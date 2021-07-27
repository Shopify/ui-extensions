import React, {useState, useEffect} from 'react';
import {
  extend,
  render,
  useSessionToken,
  TextField,
} from '@shopify/admin-ui-extensions-react';

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
