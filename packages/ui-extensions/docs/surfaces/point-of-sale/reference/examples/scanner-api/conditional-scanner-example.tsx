import React from 'react';
import {
  CameraScanner,
  Navigator,
  Screen,
  Stack,
  Text,
  useScannerDataSubscription,
  useScannerSourcesSubscription,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const {data, source} = useScannerDataSubscription();
  const availableScanners = useScannerSourcesSubscription();
  const hasCameraScanner = availableScanners.includes('camera');

  return (
    <Navigator>
      <Screen name="Home" title="Home">
        <Stack direction="horizontal">
          {hasCameraScanner ? (
            <CameraScanner />
          ) : (
            <Stack direction="vertical" alignment="space-evenly">
              <Text>{`Scanned data: ${data || ''}`}</Text>
              <Text>{`Scanned data source: ${source || ''}`}</Text>
            </Stack>
          )}
        </Stack>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
