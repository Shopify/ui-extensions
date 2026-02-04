import {extension, Button} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {picker} = api;

    const openButton = root.createComponent(Button, {
      title: 'Open Picker',
      onPress: async () => {
        await picker({
          heading: 'Select items (up to 2)',
          multiple: 2,
          headers: [{title: 'Main heading'}],
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
