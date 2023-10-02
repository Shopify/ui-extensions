import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discounts',
  description: 'The API for interacting with discounts.',
  isVisualComponent: false,
  category: 'APIs',
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
  related: getLinksByTag('apis'),
};

export default data;
