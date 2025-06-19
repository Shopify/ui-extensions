import React from 'react';
import {
  reactExtension,
  Screen,
  Navigator,
  ScrollView,
  Text,
  Section,
  useOrder,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  // Use the useOrder hook to access order information
  const order = useOrder();

  return (
    <Navigator>
      <Screen name="OrderDetails" title="Order Details">
        <ScrollView>
          <Section title="Order Information">
            <Text>Order ID: {order.id}</Text>
            <Text>Order Name: {order.name}</Text>
            {order.customerId && <Text>Customer ID: {order.customerId}</Text>}
          </Section>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.purchase.post.block.render', () => (
  <SmartGridModal />
));
