import React from 'react';
import {
  Screen,
  Navigator,
  Stack,
  Text,
  Button,
  reactExtension,
  useScannerDataSubscription,
} from '@shopify/ui-extensions-react/point-of-sale';

export default reactExtension('pos.home.modal.render', () => <ScannerResetExample />);

function ScannerResetExample() {
  const {data, source, reset} = useScannerDataSubscription();

  return (
    <Navigator>
      <Screen title="Scanner Reset Example" name="ScannerReset">
        <Stack spacing="loose">
          <Text>Scanned data: {data || 'No data'}</Text>
          <Text>Source: {source || 'No source'}</Text>
          <Button title="Reset Scanner" onPress={reset} />
        </Stack>
      </Screen>
    </Navigator>
  );
}