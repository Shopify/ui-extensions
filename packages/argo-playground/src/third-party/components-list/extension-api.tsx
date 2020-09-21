import React, {useState} from 'react';
import {
  Card,
  Stack,
  Button,
  TextField,
  Text,
  useExtensionApi,
  useLayout,
  useLocale,
  useToast,
  useSessionToken,
} from '@shopify/argo-admin-react';

export function ExtensionApiExample() {
  const {extensionPoint} = useExtensionApi();
  const layout = useLayout();
  const locale = useLocale();
  const {show: showToast} = useToast();
  const {getSessionToken} = useSessionToken();
  const [sessionToken, setSessionToken] = useState<string | undefined>();

  return (
    <>
      <Card sectioned title="Extension point">
        <Text>{extensionPoint}</Text>
      </Card>
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
            onPress={() =>
              getSessionToken().then((newSessionToken) => setSessionToken(newSessionToken))
            }
          />
          <TextField label="Session Token" type="text" value={sessionToken} multiline />
        </Stack>
      </Card>
      <Card sectioned title="useToast">
        <Stack>
          <Button title="Show toast" onPress={() => showToast('Show toast')} />
          <Button
            title="Show error toast"
            onPress={() => showToast('Show error toast', {error: true})}
          />
        </Stack>
      </Card>
    </>
  );
}
