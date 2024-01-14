import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.profile.payment.render-after',
  (root) => {
    const text = root.createText(
      'I am a company location payment extension',
    );
    root.appendChild(text);
  },
);
