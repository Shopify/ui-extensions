import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkout Settings',
  description: 'The API for interacting with the checkout settings.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_CheckoutSettingsApi',
    },
    {
      title: 'useCheckoutSettings',
      description: 'Returns the `checkoutSettings` applied to the checkout.',
      type: 'UseAttributesGeneratedType',
    },
  ],
  related: [],
};

export default data;
