import React, {useEffect, useState} from 'react';
import {render, ExtensionPoint, useSessionToken} from '@shopify/app-extensions-renderer';
import {Card, Text, TextField} from '@shopify/app-extensions-polaris-components/client';

render(ExtensionPoint.SubscriptionsManagement, () => <App />);

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
