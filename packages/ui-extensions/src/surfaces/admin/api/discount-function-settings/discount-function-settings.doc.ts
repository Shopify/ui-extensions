import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discount Function Settings API',
  description:
    'This API is available to Discount Function Settings extensions. Refer to the [tutorial](/docs/apps/build/discounts/build-ui-extension) for more information. Note that the [`FunctionSettings`](/docs/api/admin-extensions/components/forms/functionsettings) component is required to build Discount Function Settings extensions.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Set a minimum purchase amount requirement for discount eligibility. Store the threshold value as a metafield with proper type validation.',
    codeblock: {
      title: 'Configure discount threshold',
      tabs: [
        {
          code: './examples/configure-discount-threshold.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'applyMetafieldChange',
      description: 'Applies a change to the discount function settings.',
      type: 'ApplyMetafieldChange',
    },
    {
      title: 'data',
      description:
        'The object exposed to the extension that contains the discount function settings.',
      type: 'DiscountFunctionSettingsData',
    },
  ],
  examples: {
    description: 'Configure discount function settings',
    examples: [
      {
        description:
          'Configure customer eligibility rules for the discount. Set customer tags and usage limits using metafields to control who can use the discount.',
        codeblock: {
          title: 'Configure eligibility rules',
          tabs: [
            {
              code: './examples/configure-eligibility-rules.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Load existing metafield settings and conditionally apply new configuration. Check for existing values and populate your settings UI or set defaults when merchants edit discounts.',
        codeblock: {
          title: 'Load existing settings',
          tabs: [
            {
              code: './examples/load-existing-settings.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
};

export default data;
