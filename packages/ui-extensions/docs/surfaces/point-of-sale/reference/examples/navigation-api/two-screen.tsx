import React from 'react';
import {
  reactExtension,
  useApi,
  Navigator,
  Screen,
  Button,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const api = useApi<'pos.home.modal.render'>();

  return (
    <Navigator>
      <Screen name="ScreenOne" title="Screen One Title">
        <Button
          title="Navigate to Screen Two"
          onPress={() => api.navigation.navigate('ScreenTwo')}
        />
      </Screen>
      <Screen name="ScreenTwo" title="Screen Two Title">
        <Button
          title="Navigate to Screen One"
          onPress={() => api.navigation.navigate('ScreenOne')}
        />
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
