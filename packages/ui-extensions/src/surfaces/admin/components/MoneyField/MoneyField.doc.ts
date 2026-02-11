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
      'Create a money field with a label and currency formatting. Click to interact with the preview.',
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
              'Add a label, initial value, min/max constraints, and helper text to guide input. Click to interact with the preview.',
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
              'Display an error message when validation fails. Click to interact with the preview.',
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
              'Combine multiple money fields in a form with different currencies and constraints. Click to interact with the preview.',
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
              'Validate input in real time with min/max limits and dynamic error messages. Click to interact with the preview.',
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
