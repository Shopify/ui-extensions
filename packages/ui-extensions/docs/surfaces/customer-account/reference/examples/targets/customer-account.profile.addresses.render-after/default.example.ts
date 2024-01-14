import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.profile.addresses.render-after',
  (root) => {
    const text = root.createText(
      'I am an addresses extension',
    );
    root.appendChild(text);
  },
);
