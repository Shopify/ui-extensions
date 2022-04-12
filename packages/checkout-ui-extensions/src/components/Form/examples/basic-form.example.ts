import {extend, Form, Button} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
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
