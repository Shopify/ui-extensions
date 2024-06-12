import React from 'react';

import {
  Text,
  Screen,
  ScrollView,
  useApi,
  Navigator,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.order-details.action.render'>();
  return (
    <Navigator>
      <Screen name="OrderDetailsAction" title="Order Details Action">
        <ScrollView>
          <Text>{`Order ID: ${api.order.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.order-details.action.render', () => (
  <Modal />
));
