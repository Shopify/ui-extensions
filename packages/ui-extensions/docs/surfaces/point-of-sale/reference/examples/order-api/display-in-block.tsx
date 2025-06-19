import React from 'react';
import {
  reactExtension,
  POSBlock,
  POSBlockRow,
  useOrder,
} from '@shopify/ui-extensions-react/point-of-sale';

const OrderDetailsBlock = () => {
  // Use the useOrder hook directly
  const order = useOrder();

  return (
    <POSBlock>
      <POSBlockRow label="Order" value={order.name} />
      <POSBlockRow label="Order ID" value={order.id.toString()} />
      {order.customerId && (
        <POSBlockRow label="Customer ID" value={order.customerId.toString()} />
      )}
    </POSBlock>
  );
};

export default reactExtension('pos.order-details.block.render', () => (
  <OrderDetailsBlock />
));
