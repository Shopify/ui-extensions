import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/MoneyField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/moneyfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'MoneyField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'MoneyFieldEvents',
    },
  ],
  defaultExample: {
    description:
      'Capture monetary values with automatic currency formatting. This example shows a labeled money field with placeholder text and helper details. Click to interact with the preview.',
    codeblock: {
      title: 'Collect a currency value',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Guide users with constraints and helpful context. This example shows a money field with min/max limits and helper text explaining the valid range. Click to interact with the preview.',
            codeblock: {
              title: 'Add a label and constraints',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Communicate input problems clearly to users. This example shows an error message displayed when the entered value is invalid. Click to interact with the preview.',
            codeblock: {
              title: 'Handle validation errors',
              tabs: [
                {
                  code: './examples/basic-field.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-field.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Collect multiple monetary values in a single form. This example shows money fields for price, compare-at price, and cost with individual constraints. Click to interact with the preview.',
            codeblock: {
              title: 'Combine multiple fields in a form',
              tabs: [
                {
                  code: './examples/currency-formatting-with-form-integration.html',
                  language: 'html',
                },

                {
                  code: './examples/currency-formatting-with-form-integration.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Provide immediate feedback as users type. This example shows real-time validation with dynamic error messages when values exceed min/max limits. Click to interact with the preview.',
            codeblock: {
              title: 'Validate input in real time',
              tabs: [
                {
                  code: './examples/validation-example.jsx',
                  language: 'preview-jsx',
                  layout: 'formWrapper',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
