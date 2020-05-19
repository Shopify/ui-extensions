import React, {useEffect, useState} from 'react';
import {ExtensionPoint} from '@shopify/argo';
import {render, useSessionToken} from '@shopify/argo-react';
import {Stack, Text, TextField} from '@shopify/argo-react/components';

render(ExtensionPoint.SubscriptionManagement, () => <App />);

function App() {
  const {getSessionToken} = useSessionToken();
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    getSessionToken().then(setToken);
  }, [getSessionToken]);

  return (
    <Stack vertical>
      <Text>Token from my app</Text>
      <TextField type="text" value={token} multiline />
    </Stack>
  );
}
