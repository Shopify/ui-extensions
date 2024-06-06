import {
  extend,
  Button,
} from '@shopify/customer-account-ui-extensions';

export default extend(
  'customer-account.page.render',
  (root, {navigation}) => {
    const button = root.createComponent(
      Button,
      {
        onPress: () => {
          navigation.navigate(
            'extension://orders',
          );
        },
      },
      'Navigate to orders path',
    );
    root.appendChild(button);
  },
);
