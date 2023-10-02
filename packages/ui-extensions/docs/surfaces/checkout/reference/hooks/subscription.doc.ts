import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSubscription()',
  description: '',
  descriptionType: 'UseSubscriptionGeneratedType',
  isVisualComponent: false,
  type: 'React Hook',
  category: 'APIs',
  // subCategory: 'Utilities',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseSubscriptionGeneratedType',
    },
  ],
  defaultExample: getHookExample('subscription'),
  related: getLinksByTag('apis'),
};

export default data;
