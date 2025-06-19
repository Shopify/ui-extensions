import React from 'react';
import {
  reactExtension,
  POSBlock,
  POSBlockRow,
  useApi,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const OrderDetailsBlock = () => {
  const api = useApi<'pos.purchase.post.action.render'>();
  const order = api.order;

  return (
    <POSBlock>
      <POSBlockRow>
        <Text>Order {order.name}</Text>
        <Text>Order ID {order.id.toString()}</Text>
        {order.customerId && (
          <Text>Customer ID {order.customerId.toString()}</Text>
        )}
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.purchase.post.block.render', () => (
  <OrderDetailsBlock />
));
