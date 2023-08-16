import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useDeliveryGroup',
  description: '',
  descriptionType: 'UseDeliveryGroupGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Delivery',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseDeliveryGroupGeneratedType',
    },
  ],
  defaultExample: getHookExample('delivery-group'),
  related: getLinksByTag('apis'),
};

export default data;
