import {extension, Banner, Button, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const authState = api.authenticationState.current;

    if (authState === 'fully_authenticated') {
      root.appendChild(root.createComponent(Button, {onPress: () => {}}, 'Manage subscription'));
      return;
    }

    const banner = root.createComponent(Banner, {status: 'warning'});
    banner.appendChild(root.createComponent(Text, {}, 'Log in to manage your subscription.'));
    banner.appendChild(
      root.createComponent(Button, {onPress: async () => { await api.requireLogin(); }}, 'Log in'),
    );
    root.appendChild(banner);
  },
);
