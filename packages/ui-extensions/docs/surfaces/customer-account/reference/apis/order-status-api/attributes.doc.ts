import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Attributes',
  description: 'The API for interacting with cart and checkout attributes.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_AttributesApi',
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
  defaultExample: {
    codeblock: {
      title: 'Attribute values',
      tabs: [
        {
          code: '../../examples/apis/attribute-values.example.tsx',
          language: 'jsx',
          title: 'React',
        },
      ],
    },
  },
  related: [],
};

export default data;
