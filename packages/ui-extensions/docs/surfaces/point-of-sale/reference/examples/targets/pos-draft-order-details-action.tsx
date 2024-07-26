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
  const api = useApi<'pos.draft-order-details.action.render'>();
  return (
    <Navigator>
      <Screen name="DraftOrderDetailsAction" title="Draft Order Details Action">
        <ScrollView>
          <Text>{`Order ID: ${api.draftOrder.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.draft-order-details.action.render', () => (
  <Modal />
));
