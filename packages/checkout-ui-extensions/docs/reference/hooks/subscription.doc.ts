import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSubscription',
  description:
    'Subscribes to the special wrapper type that all “changeable” values in the checkout use. This hook extracts the most recent value from that object, and subscribes to update the value when changes occur in the checkout. You generally shouldn’t need to use this directly, as there are dedicated hooks for accessing the current value of each individual resource in the checkout.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Utilities',
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
