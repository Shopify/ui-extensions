import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {auth} = api;

    let productsText;
    let loadingState = false;

    const button = root.createComponent(Button, {
      title: 'Fetch from Backend',
      onPress: async () => {
        if (loadingState) return;
        
        loadingState = true;
        button.updateProps({title: 'Loading...', disabled: true});

        const token = await auth.idToken();

        const response = await fetch('https://my-app.com/api/products', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        
        if (productsText) {
          root.removeChild(productsText);
        }
        
        productsText = root.createComponent(
          Text,
          {},
          `${data.length} products loaded`,
        );
        root.appendChild(productsText);
        
        loadingState = false;
        button.updateProps({title: 'Fetch from Backend', disabled: false});
      },
    });

    root.appendChild(button);
  },
);
