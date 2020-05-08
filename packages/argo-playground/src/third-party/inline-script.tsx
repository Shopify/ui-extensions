import React, {useEffect, useState} from 'react';
import {ExtensionPoint} from '@shopify/argo';
import {render, useSessionToken} from '@shopify/argo-react';
import {Card, Text, TextField} from '@shopify/argo-react/components';

render(ExtensionPoint.SubscriptionManagement, () => <App />);

function App() {
  const {getSessionToken} = useSessionToken();
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    getSessionToken().then(setToken);
  }, [getSessionToken]);

  return (
    <Card title="Hello world" sectioned>
      <Text>Token from my app</Text>
      <TextField type="text" value={token} multiline />
    </Card>
  );
}
