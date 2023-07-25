import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinkByType} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTarget',
  description: '',
  descriptionType: 'UseTargetGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTargetGeneratedType',
    },
  ],
  defaultExample: getHookExample('cart-line-item/default'),
  related: [
    getLinkByType('CartLineItemApi'),
    getLinkByType('ShippingOptionItemApi'),
  ],
};

export default data;
