import React from 'react';
import {
  Navigator,
  Screen,
  Stack,
  Text,
  useScannerDataSubscription,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const {data, source} = useScannerDataSubscription();

  return (
    <Navigator>
      <Screen name="Home" title="Home">
        <Stack direction="horizontal">
          <Text>{`Scanned data: ${data || ''} with ${source || ''}`}</Text>
        </Stack>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
