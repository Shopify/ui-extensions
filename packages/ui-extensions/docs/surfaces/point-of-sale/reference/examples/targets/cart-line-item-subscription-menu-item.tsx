import React from 'react';
import {
  reactExtension,
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const SubscriptionMenuItemComponent = () => {
  const api = useApi<'pos.cart.line-item-subscription.action.menu-item.render'>();
  
  // Check if the line item has selling plans available
  if (!api.cartLineItem.hasSellingPlans) {
    return null;
  }
  
  const buttonText = api.cartLineItem.currentSellingPlan 
    ? `Change subscription (${api.cartLineItem.currentSellingPlan.name})`
    : 'Add subscription';
  
  return (
    <Button 
      onPress={() => api.action.presentModal()}
      title={buttonText}
    />
  );
};

export default reactExtension(
  'pos.cart.line-item-subscription.action.menu-item.render',
  () => <SubscriptionMenuItemComponent />,
);