import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {auth} = api;

    auth.idToken().then((token) => {
      fetch('https://my-app.com/api/products', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((data) => {
          console.log('Products:', data);
        });
    });
  },
);
