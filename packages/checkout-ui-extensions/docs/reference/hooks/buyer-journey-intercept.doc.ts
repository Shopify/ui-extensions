import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useBuyerJourneyIntercept',
  description: `Installs a function for intercepting and preventing progress on checkout.

  This returns a promise that resolves to a teardown function. Calling the teardown function will remove the interceptor.

  To block checkout progress, you must set the [block_progress](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress) capability in your extension's configuration.`,
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
  defaultExample: getHookExample('buyer-journey-intercept'),
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
