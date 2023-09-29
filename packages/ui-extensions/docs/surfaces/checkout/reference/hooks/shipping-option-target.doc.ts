import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinkByType} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useShippingOptionTarget',
  description: '',
  descriptionType: 'UseShippingOptionTargetGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Delivery',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseShippingOptionTargetGeneratedType',
    },
  ],
  defaultExample: getHookExample('shipping-option-item/default'),
  related: [getLinkByType('ShippingOptionItemApi')],
};

export default data;
