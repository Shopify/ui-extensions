import {
  extension,
  Button,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-subscription.action.menu-item.render',
  (root, api) => {
    // Check if the line item has selling plans available
    if (!api.cartLineItem.hasSellingPlans) {
      return;
    }
    
    const buttonText = api.cartLineItem.currentSellingPlan 
      ? `Change subscription (${api.cartLineItem.currentSellingPlan.name})`
      : 'Add subscription';
    
    const button = root.createComponent(Button, {
      onPress: () => api.action.presentModal(),
      title: buttonText,
    });
    
    root.appendChild(button);
  },
);