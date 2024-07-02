import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  STANDARD_API_PROPERTIES_DESCRIPTION,
  getLinksByTag,
  getExample,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Instructions',
  description: 'Instructions used to create the checkout.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_CartInstructionsApi',
    },
    {
      title: 'useInstructions',
      description:
        'Returns the cart instructions used to create the checkout and possibly limit extension capabilities.',
      type: 'UseInstructionsGeneratedType',
    },
  ],
  defaultExample: getExample('cart-instructions/discounts', ['jsx', 'js']),
  examples: {
    description:
      'Use the cart instructions API to determine if the affected APIs are available in checkout.',
    examples: [
      getExample('cart-instructions/attributes', ['jsx', 'js']),
      getExample('cart-instructions/delivery', ['jsx', 'js']),
      getExample('cart-instructions/discounts', ['jsx', 'js']),
      getExample('cart-instructions/cart-lines-add', ['jsx', 'js']),
      getExample('cart-instructions/metafields', ['jsx', 'js']),
      getExample('cart-instructions/notes', ['jsx', 'js']),
    ],
  },
  related: getLinksByTag('apis'),
};

export default data;
