import {extend} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {close, done, setPrimaryAction, setSecondaryAction} = api.container;

  setPrimaryAction({
    content: 'Add to plan',
    onAction: async () => {
      console.log('primary action pressed!');
      done();
    },
  });

  setSecondaryAction({
    content: 'Cancel',
    onAction: () => {
      console.log('secondary action pressed!');
      close()
    },
  });

  const text = root.createText('hi!');
  root.appendChild(text);
  root.mount();
});