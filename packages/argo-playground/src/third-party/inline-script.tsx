import React, {useEffect, useState} from 'react';
import {
  render,
  useSessionToken,
  ExtensionPoint,
  Stack,
  Text,
  TextField,
  Page,
} from '@shopify/argo-admin-react';

function App() {
  const {getSessionToken} = useSessionToken();
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    getSessionToken().then(setToken);
  }, [getSessionToken]);

  return (
    <Page title="Test">
      <Stack vertical>
        <Text>Token from my app</Text>
        <TextField type="text" value={token} multiline />
      </Stack>
    </Page>
  );
}

render(ExtensionPoint.AppLink, () => <App />);
