import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkout Settings API',
  description: 'The API for interacting with the checkout settings.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_CheckoutSettingsApi',
    },
  ],
  related: [],
};

export default data;
