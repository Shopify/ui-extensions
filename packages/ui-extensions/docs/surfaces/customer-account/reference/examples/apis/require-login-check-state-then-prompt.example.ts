import {extension, Banner, Button, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const authState = api.authenticationState.current;
    if (authState === 'fully_authenticated') {
      root.appendChild(
        root.createComponent(Button, {onPress: () => api.navigation.navigate('extension:loyalty/')}, 'View loyalty points'),
      );
      return;
    }
    const banner = root.createComponent(Banner, {status: 'info'});
    banner.appendChild(root.createComponent(Text, {}, 'Log in to view your loyalty points.'));
    banner.appendChild(root.createComponent(Button, {onPress: () => api.requireLogin()}, 'Log in'));
    root.appendChild(banner);
  },
);
