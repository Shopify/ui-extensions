import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useDeliveryGroups',
  description: '',
  descriptionType: 'UseDeliveryGroupsGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Delivery',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseDeliveryGroupsGeneratedType',
    },
  ],
  defaultExample: getHookExample('delivery-groups'),
  related: getLinksByTag('apis'),
};

export default data;
