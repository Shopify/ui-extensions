import React, {useState} from 'react';
import {Card, Stack, Button, TextField, Text} from '@shopify/argo-admin';
import {useLayout, useLocale, useToast, useSessionToken} from '@shopify/argo-admin/react';

export function ExtensionApiExample() {
  const layout = useLayout();
  const locale = useLocale();
  const {show: showToast} = useToast();
  const {getSessionToken} = useSessionToken();
  const [sessionToken, setSessionToken] = useState<string | undefined>();

  return (
    <>
      <Card sectioned title="useLayout">
        <Text>{JSON.stringify(layout) || 'undefined'}</Text>
      </Card>
      <Card sectioned title="useLocale">
        <Text>{locale}</Text>
      </Card>
      <Card sectioned title="useSessionApi">
        <Stack vertical>
          <Button
            title="Generate new sessionToken"
            onClick={() =>
              getSessionToken().then((newSessionToken) => setSessionToken(newSessionToken))
            }
          />
          <TextField type="text" value={sessionToken} multiline />
        </Stack>
      </Card>
      <Card sectioned title="useToast">
        <Stack>
          <Button title="Show toast" onClick={() => showToast('Show toast')} />
          <Button
            title="Show error toast"
            onClick={() => showToast('Show error toast', {error: true})}
          />
        </Stack>
      </Card>
    </>
  );
}
