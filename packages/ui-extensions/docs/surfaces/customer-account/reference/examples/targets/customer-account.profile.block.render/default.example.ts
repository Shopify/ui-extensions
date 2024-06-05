import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.profile.block.render',
  (root) => {
    const text = root.createText(
      'I am a Profile extension',
    );
    root.appendChild(text);
  },
);
