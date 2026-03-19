import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discounts API',
  description: 'The API for interacting with discounts.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Checkout APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_DiscountsApi',
    },
    {
      title: 'CheckoutApi',
      description: CHECKOUT_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Checkout_DiscountsApi',
    },
    {
      title: 'useApplyDiscountCodeChange',
      description: 'Returns a function to add or remove discount codes.',
      type: 'UseApplyDiscountCodeChangeGeneratedType',
    },
    {
      title: 'useDiscountAllocations',
      description:
        'Returns the current discount allocations applied to the cart.',
      type: 'UseDiscountAllocationsGeneratedType',
    },
    {
      title: 'useDiscountCodes',
      description: 'Returns the current discount codes applied to the cart.',
      type: 'UseDiscountCodesGeneratedType',
    },
  ],
  defaultExample: getExample('discounts/discount-codes', ['jsx']),
  examples: {
    description: '',
    examples: [getExample('discounts/apply-discount', ['jsx'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
