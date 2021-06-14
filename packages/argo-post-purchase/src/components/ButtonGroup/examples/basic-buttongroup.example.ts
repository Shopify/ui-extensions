import {extend, ButtonGroup, Button} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const buttonGroup = root.createComponent(ButtonGroup, undefined, [
    root.createComponent(Button, undefined, 'Cancel'),
    root.createComponent(Button, undefined, 'Submit'),
  ]);

  root.appendChild(buttonGroup);
});
