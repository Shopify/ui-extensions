import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Validation Settings API',
  description:
    'This API is available to Validation Settings extensions. Refer to the [tutorial](/docs/apps/checkout/validation/create-complex-validation-rules) for more information. Note that the [`FunctionSettings`](/docs/api/admin-extensions/components/forms/functionsettings) component is required to build Validation Settings extensions.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Set a minimum quantity requirement for cart validation. Apply metafield changes to store validation rules and handle success or error responses.',
    codeblock: {
      title: 'Set minimum quantity',
      tabs: [
        {
          code: './examples/set-minimum-quantity.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'applyMetafieldChange',
      description: 'Applies a change to the validation settings.',
      type: 'ApplyMetafieldChange',
    },
    {
      title: 'data',
      description: 'The object that exposes the validation with its settings.',
      type: 'ValidationData',
    },
  ],
  examples: {
    description: 'Configure cart and checkout validation rules',
    examples: [
      {
        description:
          'Configure shipping restrictions by blocking specific countries. Set custom error messages and validation criteria for checkout validation functions.',
        codeblock: {
          title: 'Configure shipping restrictions',
          tabs: [
            {
              code: './examples/configure-shipping-restrictions.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Load existing validation configuration or create default settings. Check if editing an existing validation and populate your UI with current values or initialize new configurations.',
        codeblock: {
          title: 'Load validation configuration',
          tabs: [
            {
              code: './examples/load-validation-config.js',
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
