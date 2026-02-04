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
          multiple: true,
          items: [
            {id: '1', heading: 'Item 1'},
            {id: '2', heading: 'Item 2'},
            {id: '3', heading: 'Item 3'},
          ],
        });
      },
    });

    root.appendChild(openButton);
  },
);
