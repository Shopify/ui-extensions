import React, {useEffect} from 'react';
import {
  Navigator,
  Screen,
  Stack,
  Text,
  useScannerSourcesSubscription,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';


const SmartGridModal = () => {
  const scannerSources = useScannerSourcesSubscription();

  return (
      <Navigator>
      <Screen name="Home" title="Home">
        <Stack direction="horizontal" flexChildren flex={1}>
          <Text>{`Available scanner sources: ${scannerSources}`}</Text>
        </Stack>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => <SmartGridModal />);
