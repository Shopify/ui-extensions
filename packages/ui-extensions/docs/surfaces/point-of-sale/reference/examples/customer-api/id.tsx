import React from 'react';

import {
  Text,
  Screen,
  ScrollView,
  Navigator,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.customer-details.action.render'>();
  return (
    <Navigator>
      <Screen name="CustomerApi" title="Customer Api">
        <ScrollView>
          <Text>{`Customer ID: ${api.customer.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.customer-details.action.render', () => (
  <Modal />
));
