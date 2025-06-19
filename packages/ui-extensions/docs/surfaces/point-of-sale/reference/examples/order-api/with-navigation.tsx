import React from 'react';
import {
  reactExtension,
  Navigator,
  Screen,
  Text,
  Button,
  useOrder,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const OrderActionModal = () => {
  const order = useOrder();
  const {navigation} = useApi();

  const handleViewCustomer = () => {
    if (order.customerId) {
      // Navigate to customer details
      navigation.navigate('CustomerDetails', {
        customerId: order.customerId,
      });
    }
  };

  return (
    <Navigator>
      <Screen name="OrderActions" title="Order Actions">
        <Text>Processing order: {order.name}</Text>
        {order.customerId && (
          <Button title="View Customer" onPress={handleViewCustomer} />
        )}
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.purchase.post.action.render', () => (
  <OrderActionModal />
));
