import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {resourcePicker} = api;
    let selectedText;

    const pickButton = root.createComponent(Button, {
      title: 'Select Products',
      onPress: async () => {
        const result = await resourcePicker({type: 'product'});
        
        if (selectedText) root.removeChild(selectedText);
        
        if (result) {
          selectedText = root.createComponent(Text, {}, `${result.length} products selected`);
          root.appendChild(selectedText);
        }
      },
    });

    root.appendChild(pickButton);
  },
);
