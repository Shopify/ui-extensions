import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
  STANDARD_API_PROPERTIES_DESCRIPTION,
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  getExample,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Metafields',
  description: 'The API for interacting with metafields.',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_MetafieldsApi',
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
    {
      title: 'CheckoutApi',
      description: CHECKOUT_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Checkout_MetafieldsApi',
    },
    {
      title: 'useApplyMetafieldsChange',
      description:
        'Returns a function to mutate the `metafields` property of the checkout.',
      type: 'UseApplyMetafieldsChangeGeneratedType',
    },
  ],
  defaultExample: getExample('metafields/default', ['jsx', 'js', 'toml']),
  related: getLinksByTag('apis'),
};

export default data;
