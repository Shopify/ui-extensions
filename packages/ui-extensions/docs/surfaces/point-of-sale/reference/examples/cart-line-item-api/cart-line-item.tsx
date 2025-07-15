import React from 'react';
import {
  Text,
  Stack,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const CartLineItemComponent = () => {
  const api = useApi<'pos.cart.line-item-subscription.action.menu-item.render'>();
  const lineItem = api.cartLineItem;
  
  return (
    <Stack direction="vertical">
      <Text>{lineItem.title}</Text>
      <Text appearance="subdued">Quantity: {lineItem.quantity}</Text>
      <Text appearance="subdued">Price: ${lineItem.price}</Text>
    </Stack>
  );
};