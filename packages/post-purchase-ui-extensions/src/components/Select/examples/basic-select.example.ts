import {extend, Select} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const select = root.createComponent(Select, {
    label: 'Select',
    value: '1',
    options: [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      },
      {
        value: '3',
        label: 'Option 3',
      },
    ],
  });

  root.appendChild(select);
});
