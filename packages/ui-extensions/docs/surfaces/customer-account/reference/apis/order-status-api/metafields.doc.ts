import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ORDER_STATUS_API_DEFINITION,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Metafields',
  description: 'The API for interacting with metafields.',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_MetafieldsApi',
    },
    {
      title: 'useAppMetafields',
      description:
        'Returns the metafields configured with `shopify.extension.toml`.',
      type: 'UseAppMetafieldsGeneratedType',
    },
    {
      title: 'useMetafield',
      description: 'Returns a single filtered `Metafield` or `undefined`.',
      type: 'UseMetafieldGeneratedType',
    },
    {
      title: 'useMetafields',
      description:
        'Returns the current array of `metafields` applied to the checkout. You can optionally filter the list.',
      type: 'UseMetafieldsGeneratedType',
    },
  ],
  related: [],
};

export default data;
