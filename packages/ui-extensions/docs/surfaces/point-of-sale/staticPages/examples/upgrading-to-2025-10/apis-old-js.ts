import {extension, Button} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  async function onButtonClick() {
    await api.print.print('documents/test-print');
    console.log('print completed');
  }

  root.replaceChildren(
    root.createComponent(Button, {
      onPress: onButtonClick,
      title: 'Print',
    }),
  );
});
