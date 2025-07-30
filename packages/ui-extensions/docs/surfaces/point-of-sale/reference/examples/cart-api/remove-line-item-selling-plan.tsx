import React from 'react';

import {
  Button,
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
      <Screen name="Cart API" title="Remove Line Item Selling Plan">
        <ScrollView>
          <Button
            onPress={() =>
              api.cart.removeLineItemSellingPlan(api.cartLineItem.uuid)
            }
          />
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.cart.line-item-details.action.render',
  () => <Modal />,
);
