import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.profile.company-location-staff.render-after',
  (root) => {
    const text = root.createText(
      'I am a company location staff extension',
    );
    root.appendChild(text);
  },
);
