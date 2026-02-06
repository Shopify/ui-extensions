import {extension, Button} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {picker} = api;

    const openButton = root.createComponent(Button, {
      title: 'Open Picker',
      onPress: async () => {
        await picker({
          heading: 'Select items',
          items: [
            {id: '1', heading: 'Item 1', selected: true},
            {id: '2', heading: 'Item 2'},
          ],
        });
      },
    });

    root.appendChild(openButton);
  },
);
