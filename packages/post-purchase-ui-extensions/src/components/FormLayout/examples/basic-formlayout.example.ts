import {
  extend,
  FormLayout,
  FormLayoutGroup,
  TextField,
} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const formLayout = root.createComponent(FormLayout, undefined, [
    root.createComponent(TextField, {
      label: 'Address',
      name: 'address',
      id: 'address',
    }),
    root.createComponent(FormLayoutGroup, undefined, [
      root.createComponent(TextField, {
        label: 'City',
        name: 'city',
        id: 'city',
      }),
      root.createComponent(TextField, {
        label: 'Postal code',
        name: 'postal',
        id: 'postal',
      }),
    ]),
  ]);

  root.appendChild(formLayout);
});
