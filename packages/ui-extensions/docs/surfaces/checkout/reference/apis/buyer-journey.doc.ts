import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  STANDARD_API_PROPERTIES_DESCRIPTION,
  getExample,
  getLinksByTag,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Buyer Journey',
  description: 'The API for interacting with the buyer journey.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_BuyerJourneyApi',
    },
    {
      title: 'useBuyerJourney',
      description:
        'Returns the buyerJourney details on buyer progression in checkout.',
      type: 'UseBuyerJourneyGeneratedType',
    },
    {
      title: 'useBuyerJourneyCompleted',
      description: `
        Returns \`true\` if the buyer completed submitting their order.
        For example, when viewing the **Order status** page after submitting payment, the buyer will have completed their order.
      `,
      type: 'UseBuyerJourneyCompletedGeneratedType',
    },
    {
      title: 'useBuyerJourneyIntercept',
      description: `
        Installs a function for intercepting and preventing progress on checkout.
        To block checkout progress, you must set the [block_progress](/docs/api/checkout-ui-extensions/configuration#block-progress) capability in your extension's configuration.
        If you do, then you're expected to inform the buyer why navigation was blocked, either by passing validation errors to the checkout UI or rendering the errors in your extension.
        \`useBuyerJourneyIntercept()\` should be called at the top level of the extension, not within an embedded or child component, to avoid errors should the child component get destroyed.
      `,
      type: 'UseBuyerJourneyInterceptGeneratedType',
    },
    {
      title: 'useBuyerJourneySteps',
      description: `
        Returns all possible steps a buyer can take to complete the checkout. These steps may vary depending on the type of checkout or the shop's configuration.
      `,
      type: 'UseBuyerJourneyStepsGeneratedType',
    },
    {
      title: 'useBuyerJourneyActiveStep',
      description: `
        Returns the buyer journey step that the buyer is currently on.
      `,
      type: 'UseBuyerJourneyActiveStepGeneratedType',
    },
  ],
  defaultExample: getExample('buyer-journey-intercept/target-native-field', [
    'jsx',
    'js',
  ]),
  examples: {
    description:
      'In addition to targeting checkout UI fields, you can also pass errors to the page level or render the error in your extension.',
    examples: [
      getExample('buyer-journey-intercept/page-level-error', ['jsx', 'js']),
      getExample('buyer-journey-intercept/extension-banner', ['jsx', 'js']),
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
