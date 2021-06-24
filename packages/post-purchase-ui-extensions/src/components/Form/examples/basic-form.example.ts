import {extend, Form, Button} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const form = root.createComponent(
    Form,
    {
      // eslint-disable-next-line no-console
      onSubmit: () => console.log('Submitted!'),
    },
    [root.createComponent(Button, {submit: true}, 'Submit')],
  );

  root.appendChild(form);
});
