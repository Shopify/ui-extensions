import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ADDRESS_AUTOCOMPLETE_SUGGEST_API,
  getExample,
  getLinksByTag,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.address-autocomplete.suggest',
  description: `
  An extension target used to provide address autocomplete suggestions. It accepts input and must return address suggestions.

  > Caution: This target does not support rendering UI components.
  `,
  subCategory: 'Utility',
  defaultExample: getExample('purchase.address-autocomplete.suggest/default', [
    'js',
  ]),
  related: getLinksByTag('targets'),
  ...ADDRESS_AUTOCOMPLETE_SUGGEST_API,
};

export default data;
