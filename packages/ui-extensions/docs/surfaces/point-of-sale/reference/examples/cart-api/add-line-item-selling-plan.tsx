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
  // Your app determines the selling plan ID to add to the line item
  const sellingPlanId = 123456;

  return (
    <Navigator>
      <Screen name="Cart API" title="Add Line Item Selling Plan">
        <ScrollView>
          <Button
            onPress={() =>
              api.cart.addLineItemSellingPlan(
                api.cartLineItem.uuid,
                sellingPlanId,
              )
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
