import React from 'react';
import {
  reactExtension,
  Text,
  Stack,
  useOrder,
} from '@shopify/ui-extensions-react/point-of-sale';

const OrderInfo = () => {
  // The useOrder hook provides direct access to order data
  const order = useOrder();

  return (
    <Stack>
      <Text>Order #{order.name}</Text>
      <Text>ID: {order.id}</Text>
      {order.customerId && <Text>Customer ID: {order.customerId}</Text>}
    </Stack>
  );
};

export default reactExtension('pos.order-details.block.render', () => (
  <OrderInfo />
));
