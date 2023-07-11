import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useBuyerJourneyIntercept',
  description: '',
  descriptionType: 'UseBuyerJourneyInterceptGeneratedType',
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
    {
      title: 'InterceptorRequestBlock',
      description: 'Block the buyer from proceeding further in the checkout',
      type: 'InterceptorRequestBlock',
    },
    {
      title: 'InterceptorRequestAllow',
      description: 'Allow the buyer to proceed further in the checkout',
      type: 'InterceptorRequestAllow',
    },
  ],
  defaultExample: getHookExample('buyer-journey-intercept/target-native-field'),
  examples: {
    description:
      'In addition to targeting checkout UI fields, you can also pass errors to the page level or render the error in your extension.',
    examples: [
      getHookExample('buyer-journey-intercept/page-level-error'),
      getHookExample('buyer-journey-intercept/extension-banner'),
    ],
  },
  related: [
    {
      subtitle: 'Tutorial',
      name: 'Validating fields at checkout',
      url: '/docs/apps/checkout/validation/fields',
      type: 'tutorial',
    },
    ...getLinksByTag('apis'),
  ],
};

export default data;
