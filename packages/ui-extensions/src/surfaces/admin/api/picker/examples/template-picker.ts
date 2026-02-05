import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {picker} = api;

    let selectedText;

    const pickButton = root.createComponent(Button, {
      title: 'Choose Template',
      onPress: async () => {
        const pickerInstance = await picker({
          heading: 'Select a template',
          multiple: false,
          headers: [
            {title: 'Templates'},
            {title: 'Created by'},
            {title: 'Times used', type: 'number'},
          ],
          items: [
            {
              id: '1',
              heading: 'Full width, 1 column',
              data: ['Karine Ruby', '0'],
              badges: [{content: 'Draft', tone: 'info'}, {content: 'Marketing'}],
            },
            {
              id: '2',
              heading: 'Large graphic, 3 column',
              data: ['Russell Winfield', '5'],
              badges: [
                {content: 'Published', tone: 'success'},
                {content: 'New feature'},
              ],
              selected: true,
            },
            {
              id: '3',
              heading: 'Promo header, 2 column',
              data: ['Russel Winfield', '10'],
              badges: [{content: 'Published', tone: 'success'}],
            },
          ],
        });

        const result = await pickerInstance.selected;

        if (selectedText) {
          root.removeChild(selectedText);
        }

        if (result && result.length > 0) {
          selectedText = root.createComponent(
            Text,
            {},
            `Selected template: ${result[0]}`,
          );
          root.appendChild(selectedText);
        }
      },
    });

    root.appendChild(pickButton);
  },
);
