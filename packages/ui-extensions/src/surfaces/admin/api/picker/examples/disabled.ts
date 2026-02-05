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
            {id: '1', heading: 'Available item'},
            {id: '2', heading: 'Disabled item', disabled: true},
          ],
        });
      },
    });

    root.appendChild(openButton);
  },
);
