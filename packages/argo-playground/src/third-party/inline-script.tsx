import React, {useEffect, useState} from 'react';
import {
  extend,
  render,
  useSessionToken,
  ExtensionPoint,
  Stack,
  Text,
  TextField,
} from '@shopify/argo-admin-react';

function App() {
  const {getSessionToken} = useSessionToken();
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    getSessionToken()
      .then(setToken)
      .catch((error) => console.log(`Get session token error: ${error}`));
  }, [getSessionToken]);

  return (
    <Stack vertical>
      <Text>Token from my app</Text>
      <TextField label="Token" type="text" value={token} multiline />
    </Stack>
  );
}

extend(
  ExtensionPoint.Playground,
  render(() => <App />),
);
