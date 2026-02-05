import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {picker} = api;

    let selectedText;

    const openButton = root.createComponent(Button, {
      title: 'Open Picker',
      onPress: async () => {
        const pickerInstance = await picker({
          heading: 'Select an item',
          headers: [{title: 'Main heading'}],
          items: [
            {id: '1', heading: 'Item 1'},
            {id: '2', heading: 'Item 2'},
          ],
        });

        const result = await pickerInstance.selected;

        if (selectedText) {
          root.removeChild(selectedText);
        }

        if (result) {
          selectedText = root.createComponent(
            Text,
            {},
            `${result.length} items selected`,
          );
          root.appendChild(selectedText);
        }
      },
    });

    root.appendChild(openButton);
  },
);
