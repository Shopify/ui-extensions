import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/EmailField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/emailfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'EmailFieldEvents',
    },
  ],
  defaultExample: {
    image: 'emailfield-default.png',
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
              'Demonstrates a simple email field with a label and required attribute, showing the most fundamental way to use the EmailField component.',
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
              'Showcases an email field with additional details and an error message, illustrating how to provide contextual information and validation feedback.',
            codeblock: {
              title: 'With error and help text',
              tabs: [
                {
                  code: './examples/with-error-and-help-text.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-and-help-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates an optional email field with a placeholder text and help text, demonstrating a common pattern for collecting alternative contact information.',
            codeblock: {
              title: 'Optional field with placeholder',
              tabs: [
                {
                  code: './examples/optional-field-with-placeholder.html',
                  language: 'html',
                },

                {
                  code: './examples/optional-field-with-placeholder.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to render an email field in a read-only state, useful for displaying existing email addresses that cannot be modified.',
            codeblock: {
              title: 'Read-only display',
              tabs: [
                {
                  code: './examples/read-only-display.html',
                  language: 'html',
                },

                {
                  code: './examples/read-only-display.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates setting minimum and maximum length constraints for the email input, providing additional validation beyond the standard email format check.',
            codeblock: {
              title: 'With length constraints',
              tabs: [
                {
                  code: './examples/with-length-constraints.html',
                  language: 'html',
                },

                {
                  code: './examples/with-length-constraints.jsx',
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
              'Interactive example showing real-time email validation with error messages that update as the user types.',
            codeblock: {
              title: 'Email validation',
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
