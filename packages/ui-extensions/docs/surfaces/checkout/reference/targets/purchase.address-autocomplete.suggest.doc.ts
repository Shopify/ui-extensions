import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ADDRESS_AUTOCOMPLETE_SUGGEST_API,
  getExample,
  getLinksByTag,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.address-autocomplete.suggest',
  description: `
  An extension target that provides address autocomplete suggestions for address forms within checkout. These suggestions are shown to buyers as they interact with autocomplete fields of the delivery address, billing address, and pickup point address forms.

  It must return a list of address [\`suggestions\`](/docs/api/checkout-ui-extensions/unstable/targets/utility/purchase-address-autocomplete-suggest#addressautocompletesuggestoutput-propertydetail-suggestions).

  > Tip:
  > - If a formatted address is provided with each suggestion, it will be used to auto-populate the fields in the address form when the buyer selects a suggested address.
  > - Optionally, you can implement the [\`purchase.address-autocomplete.format-suggest\`](/docs/api/checkout-ui-extensions/unstable/targets/utility/purchase-address-autocomplete-format-suggestion) extension target to format an address based on the address suggestion selected by the buyer.

  > Caution:
  > - This target does not support rendering UI components.
  > - This extension can only be developed as a JavaScript extension using the \`ui-extensions\` library.
  `,
  subCategory: 'Utility',
  defaultExample: getExample('purchase.address-autocomplete.suggest/default', [
    'js',
  ]),
  related: getLinksByTag('targets'),
  ...ADDRESS_AUTOCOMPLETE_SUGGEST_API,
};

export default data;
