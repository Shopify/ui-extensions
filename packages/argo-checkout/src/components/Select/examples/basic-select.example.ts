import {extend, Select} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const select = root.createComponent(Select, {
    label: 'Select',
    options: [
      {
        value: 'value',
        label: 'Option',
      },
    ],
  });

  root.appendChild(select);
});
