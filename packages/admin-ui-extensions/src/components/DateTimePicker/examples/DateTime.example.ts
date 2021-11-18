import {extend, DateTimePicker} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const dateTimePicker = root.createComponent(DateTimePicker, {
    type: 'date',
  });

  root.mount();
});
