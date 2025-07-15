import React from 'react';
import {
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const SubscriptionButtonComponent = () => {
  const api = useApi<'pos.cart.line-item-subscription.action.menu-item.render'>();
  
  // Only show the subscription button if the product has selling plans
  if (!api.cartLineItem.hasSellingPlans) {
    return null;
  }
  
  return (
    <Button 
      onPress={() => api.action.presentModal()}
      title={`Configure subscription (${api.cartLineItem.sellingPlanCount} options available)`}
    />
  );
};