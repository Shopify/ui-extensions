import React from 'react';
import {
  Stack,
  Text,
  Badge,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const SellingPlanInfoComponent = () => {
  const api = useApi<'pos.cart.line-item-subscription.action.render'>();
  
  if (!api.cartLineItem.currentSellingPlan) {
    return (
      <Text appearance="subdued">No subscription selected</Text>
    );
  }
  
  return (
    <Stack direction="horizontal" spacing="base">
      <Text>Current subscription:</Text>
      <Badge>{api.cartLineItem.currentSellingPlan.name}</Badge>
      <Text appearance="subdued">ID: {api.cartLineItem.currentSellingPlan.id}</Text>
    </Stack>
  );
};