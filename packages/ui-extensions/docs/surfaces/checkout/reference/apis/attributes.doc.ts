import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  STANDARD_API_PROPERTIES_DESCRIPTION,
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  getLinksByTag,
  getHookExample,
  getExample,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Attributes API',
  description: 'The API for interacting with cart and checkout attributes.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Checkout APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_AttributesApi',
    },
    {
      title: 'CheckoutApi',
      description: CHECKOUT_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Checkout_AttributesApi',
    },
    {
      title: 'useApplyAttributeChange',
      description:
        'Returns a function to mutate the `attributes` property of the checkout.',
      type: 'UseApplyAttributeChangeGeneratedType',
    },
    {
      title: 'useAttributes',
      description: 'Returns the proposed `attributes` applied to the checkout.',
      type: 'UseAttributesGeneratedType',
    },
    {
      title: 'useAttributeValues',
      description:
        'Returns the values for the specified `attributes` applied to the checkout.',
      type: 'UseAttributeValuesGeneratedType',
    },
  ],
  defaultExample: getExample('attribute-values', ['jsx', 'js']),
  examples: {
    description: '',
    examples: [getExample('attributes/attribute-change', ['jsx', 'js'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
