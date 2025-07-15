import {
  Button,
} from '@shopify/ui-extensions/point-of-sale';

export default (root, api) => {
  // Only show the subscription button if the product has selling plans
  if (!api.cartLineItem.hasSellingPlans) {
    return;
  }
  
  const button = root.createComponent(Button, {
    onPress: () => api.action.presentModal(),
    title: `Configure subscription (${api.cartLineItem.sellingPlanCount} options available)`,
  });
  
  root.appendChild(button);
};