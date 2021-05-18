import {extend, Form, Button} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
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
