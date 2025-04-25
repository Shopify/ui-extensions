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
  const api = useApi<'pos.cart.line-item-details.action.render'>();
  return (
    <Navigator>
      <Screen name="CartLineItemApi" title="Cart Line Item Api">
        <ScrollView>
          <Text>{`Cart Line Item ID: ${api.cartLineItem.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.cart.line-item-details.action.render',
  () => <Modal />,
);
