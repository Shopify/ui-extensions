import React from 'react';
import {
  Navigator,
  Screen,
  Stack,
  Text,
  useScannerDataSubscription,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const api = useApi<'pos.home.modal.render'>();
  const {data} = useScannerDataSubscription();

  return (
    <Navigator>
      <Screen name="Home" title="Home">
        <Stack direction="horizontal">
          <Text>{`Scanned data: ${data || ''}`}</Text>
        </Stack>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
