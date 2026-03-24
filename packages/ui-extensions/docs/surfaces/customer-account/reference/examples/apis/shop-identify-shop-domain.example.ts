import {
  extension,
  Banner,
  Button,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const shop = api.shop;

    const button = root.createComponent(
      Button,
      {
        onPress: async () => {
          await fetch('https://my-app.example.com/api/sync', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              shopId: shop.id,
              domain: shop.myshopifyDomain,
            }),
          });

          root.removeChild(button);
          const banner = root.createComponent(Banner, {status: 'success'});
          banner.appendChild(
            root.createComponent(
              Text,
              {},
              `Synced with ${shop.myshopifyDomain}`,
            ),
          );
          root.appendChild(banner);
        },
      },
      'Sync shop data',
    );
    root.appendChild(button);
  },
);
