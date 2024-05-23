import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ADDRESS_AUTOCOMPLETE_SUGGEST_API,
  getExample,
  getLinksByTag,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.address-autocomplete.suggest',
  description: `
  An extension target that provides address autocomplete suggestions for address forms at checkout. Suggestions are presented to customers for delivery, billing, and pickup point addresses.

  The extension target must return a list of address [\`suggestions\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-suggest#addressautocompletesuggestoutput-propertydetail-suggestions).

  If a formatted address is provided with each suggestion, then it will be used to auto-populate the fields in the address form when the customer selects a suggested address.

  Optionally, you can implement the [\`purchase.address-autocomplete.format-suggestion\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-format-suggestion) extension target to format an address based on the address suggestion selected by the customer.

  > Note:
  > - This target does not support rendering UI components.
  > - This extension can only be developed as a JavaScript extension using the \`ui-extensions\` library.
  > - The [app extension configuration](/docs/apps/app-extensions/configuration) \`shopify.extension.toml\` file is shared between this extension target and [\`purchase.address-autocomplete.format-suggestion\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-format-suggestion). This includes extension settings specified in the configuration file.
  `,
  subCategory: 'Address',
  defaultExample: getExample('purchase.address-autocomplete.suggest/default', [
    'js',
  ]),
  related: getLinksByTag('targets', 'Tutorials'),
  ...ADDRESS_AUTOCOMPLETE_SUGGEST_API,
};

export default data;
