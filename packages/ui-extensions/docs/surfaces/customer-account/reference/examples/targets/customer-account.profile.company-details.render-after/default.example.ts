import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.profile.addresses.render-after',
  (root) => {
    const text = root.createText(
      'I am a company details extension',
    );
    root.appendChild(text);
  },
);
