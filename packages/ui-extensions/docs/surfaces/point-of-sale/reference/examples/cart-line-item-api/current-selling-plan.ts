import {
  Stack,
  Text,
  Badge,
} from '@shopify/ui-extensions/point-of-sale';

export default (root, api) => {
  if (!api.cartLineItem.currentSellingPlan) {
    const text = root.createComponent(Text, {
      appearance: 'subdued',
    }, 'No subscription selected');
    root.appendChild(text);
    return;
  }
  
  const stack = root.createComponent(Stack, {
    direction: 'horizontal',
    spacing: 'base',
  });
  
  const label = root.createComponent(Text, {}, 'Current subscription:');
  const badge = root.createComponent(Badge, {}, api.cartLineItem.currentSellingPlan.name);
  const idText = root.createComponent(Text, {
    appearance: 'subdued',
  }, `ID: ${api.cartLineItem.currentSellingPlan.id}`);
  
  stack.appendChild(label);
  stack.appendChild(badge);
  stack.appendChild(idText);
  
  root.appendChild(stack);
};