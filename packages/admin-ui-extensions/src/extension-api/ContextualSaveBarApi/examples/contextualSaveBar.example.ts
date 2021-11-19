import {extend, Button} from '@shopify/admin-ui-extensions';

extend('Admin::Discounts::Create', (root, api) => {
  const {
    contextualSaveBar: {
      setVisible,
      setSaveAction,
      setDiscardAction
    },
  } = api;

  setSaveAction(() => console.log("Save content"));
  setDiscardAction(() => console.log("Discard content"));

  const button = root.createComponent(Button, {
    title: 'Show contextual save bar',
    primary: true,
    onPress: () => setVisible(true),
  });
  root.appendChild(button);

  const hideButton = root.createComponent(Button, {
    title: 'Hide contextual save bar',
    onPress: () => setVisible(false),
  });
  root.appendChild(hideButton);

  root.mount();
});
