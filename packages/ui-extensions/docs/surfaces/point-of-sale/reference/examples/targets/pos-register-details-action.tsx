import React from 'react';

import {
  Navigator,
  Screen,
  ScrollView,
  Text,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.register-details.action.render'>();

  return (
    <Navigator>
      <Screen name="CashManagement" title="Cash Management Home">
        <ScrollView>
          <Text>Cash management extension</Text>
          <Text>{`Device ID: ${api.device.getDeviceId()}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.register-details.action.render', () => (
  <Modal />
));
