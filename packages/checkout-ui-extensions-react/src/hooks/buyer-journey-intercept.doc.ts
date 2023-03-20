import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useBuyerJourneyIntercept',
  description:
    'Returns a function to intercept and block navigation in checkout.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Buyer Journey',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseBuyerJourneyInterceptGeneratedType',
    },
  ],
  related: getLinksByTag(
    'buyer-journey',
    'UseBuyerJourneyInterceptGeneratedType',
  ),
};

export default data;
