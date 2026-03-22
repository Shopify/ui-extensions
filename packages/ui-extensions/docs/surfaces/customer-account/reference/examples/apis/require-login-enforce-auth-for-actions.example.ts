import {extension, Banner, Button, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const button = root.createComponent(
      Button,
      {
        onPress: async () => {
          const authState = api.authenticationState.current;
          if (authState !== 'fully_authenticated') {
            await api.requireLogin();
          }
          root.removeChild(button);
          const banner = root.createComponent(Banner, {status: 'success'});
          banner.appendChild(root.createComponent(Text, {}, 'Warranty claim submitted.'));
          root.appendChild(banner);
        },
      },
      'Submit warranty claim',
    );
    root.appendChild(button);
  },
);
