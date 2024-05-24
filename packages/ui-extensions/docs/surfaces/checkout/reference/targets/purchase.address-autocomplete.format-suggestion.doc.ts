import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ADDRESS_AUTOCOMPLETE_FORMAT_SUGGESTION_API,
  getExample,
  getLinksByTag,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.address-autocomplete.format-suggestion',
  description: `
  An extension target that formats the selected address suggestion provided by a [\`purchase.address-autocomplete.suggest\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-suggest) target. This formatted address is used to auto-populate the fields of the address form.

  It must return a [\`formattedAddress\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-format-suggestion#addressautocompleteformatsuggestionoutput-propertydetail-formattedaddress).

  > Caution:
  > This extension target is only necessary if the corresponding [\`purchase.address-autocomplete.suggest\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-suggest) target does not provide a \`formattedAddress\` for the suggestions. If a formatted address is provided with each suggestion, then this target will not be called.
  >
  > If the [\`purchase.address-autocomplete.suggest\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-suggest) target is not implemented, then this target will not work.

  > Note:
  > - This target does not support rendering UI components.
  > - This extension can only be developed as a JavaScript extension using the \`ui-extensions\` library.
  > - The [app extension configuration](/docs/apps/app-extensions/configuration) \`shopify.extension.toml\` file is shared between this extension target and [\`purchase.address-autocomplete.suggest\`](/docs/api/checkout-ui-extensions/unstable/targets/address/purchase-address-autocomplete-suggest). This includes extension settings specified in the configuration file.
  `,
  subCategory: 'Address',
  defaultExample: getExample(
    'purchase.address-autocomplete.format-suggestion/default',
    ['js'],
  ),
  related: getLinksByTag('targets', 'Tutorials'),
  ...ADDRESS_AUTOCOMPLETE_FORMAT_SUGGESTION_API,
};

export default data;
