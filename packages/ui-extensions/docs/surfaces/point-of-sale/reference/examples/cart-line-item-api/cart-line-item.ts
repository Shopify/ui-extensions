import {
  Text,
  Stack,
} from '@shopify/ui-extensions/point-of-sale';

export default (root, api) => {
  const lineItem = api.cartLineItem;
  
  const stack = root.createComponent(Stack, {
    direction: 'vertical',
  });
  
  const titleText = root.createComponent(Text, {}, lineItem.title);
  const quantityText = root.createComponent(Text, {
    appearance: 'subdued',
  }, `Quantity: ${lineItem.quantity}`);
  const priceText = root.createComponent(Text, {
    appearance: 'subdued',
  }, `Price: $${lineItem.price}`);
  
  stack.appendChild(titleText);
  stack.appendChild(quantityText);
  stack.appendChild(priceText);
  
  root.appendChild(stack);
};