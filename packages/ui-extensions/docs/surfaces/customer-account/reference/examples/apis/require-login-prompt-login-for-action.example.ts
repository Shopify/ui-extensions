import {extension, Button} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    root.appendChild(
      root.createComponent(
        Button,
        {onPress: async () => { await api.requireLogin(); }},
        'Report an issue',
      ),
    );
  },
);
