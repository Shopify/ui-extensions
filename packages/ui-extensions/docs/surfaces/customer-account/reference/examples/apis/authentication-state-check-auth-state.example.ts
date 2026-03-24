import {extension, Banner, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const authState = api.authenticationState.current;
    const banner = root.createComponent(
      Banner,
      {status: authState === 'fully_authenticated' ? 'success' : 'warning'},
    );
    banner.appendChild(
      root.createComponent(
        Text, {},
        authState === 'fully_authenticated'
          ? 'You are fully logged in.'
          : 'You are viewing this page through a shared link.',
      ),
    );
    root.appendChild(banner);
  },
);
