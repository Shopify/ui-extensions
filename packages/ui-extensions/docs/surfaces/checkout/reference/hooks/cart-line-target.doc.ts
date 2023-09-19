import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinkByType} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useCartLineTarget',
  description: '',
  descriptionType: 'UseCartLineTargetGeneratedType',
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
  related: [getLinkByType('CartLineItemApi')],
};

export default data;
