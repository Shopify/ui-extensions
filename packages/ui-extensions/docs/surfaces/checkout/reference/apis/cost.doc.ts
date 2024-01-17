import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cost',
  description: 'The API for interacting with the cost of a checkout.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_CostApi',
    },
    {
      title: 'useSubtotalAmount',
      description:
        'A `Money` value representing the subtotal value of the items in the cart at the current step of checkout.',
      type: 'UseSubtotalAmountGeneratedType',
    },
    {
      title: 'useTotoalShippingAmount',
      description:
        'Returns a `Money` value representing the total shipping a buyer can expect to pay at the current step of checkout. This value includes shipping discounts. Returns undefined if shipping has not been negotiated yet, such as on the information step.',
      type: 'UseTotalShippingAmountGeneratedType',
    },
    {
      title: 'useTotalTaxAmount',
      description:
        'Returns a `Money` value representing the total tax a buyer can expect to pay at the current step of checkout or the total tax included in product and shipping prices. Returns undefined if taxes are unavailable.',
      type: 'UseTotalTaxAmountGeneratedType',
    },
    {
      title: 'useTotalAmount',
      description:
        'Returns a `Money` value representing the minimum a buyer can expect to pay at the current step of checkout. This value excludes amounts yet to be negotiated. For example, the information step might not have delivery costs calculated.',
      type: 'UseTotalAmountGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
