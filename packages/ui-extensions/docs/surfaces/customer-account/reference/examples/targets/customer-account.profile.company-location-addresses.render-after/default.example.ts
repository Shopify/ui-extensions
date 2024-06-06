import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.profile.company-location-addresses.render-after',
  (root) => {
    const text = root.createText(
      'I am a company location addresses extension',
    );
    root.appendChild(text);
  },
);
