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
    image: 'moneyfield-default.png',
    codeblock: {
      title: 'Code',
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
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a simple money field with a label, initial value, and numeric constraints.',
            codeblock: {
              title: 'Basic usage',
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
              'Showcases a money field with explicit minimum and maximum value limits, and a detailed description for user guidance.',
            codeblock: {
              title: 'With validation limits',
              tabs: [
                {
                  code: './examples/with-validation-limits.html',
                  language: 'html',
                },

                {
                  code: './examples/with-validation-limits.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a money field demonstrating basic error handling and validation.',
            codeblock: {
              title: 'Basic field',
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
              'Displays multiple money fields in a vertical stack, showing how to integrate multiple currency inputs in a form with varied details and constraints.',
            codeblock: {
              title: 'Currency formatting with form integration',
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
        title: 'Form validation',
        examples: [
          {
            description:
              'Interactive example showing real-time validation with min/max limits and dynamic error messages.',
            codeblock: {
              title: 'Money field validation',
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
