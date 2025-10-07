import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/PasswordField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/passwordfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PasswordField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'PasswordFieldEvents',
    },
  ],
  defaultExample: {
    image: 'password-field-default.png',
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
              'Demonstrates a basic password field with a label, name, and required validation. Sets a minimum length of 8 characters and configures autocomplete for a new password.',
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
              'Shows a password field in an error state, displaying a custom error message when the password does not meet the minimum length requirement.',
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a password field with additional details providing guidance about password creation requirements.',
            codeblock: {
              title: 'With helper text',
              tabs: [
                {
                  code: './examples/with-helper-text.html',
                  language: 'html',
                },

                {
                  code: './examples/with-helper-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a controlled password field with a predefined value, useful for scenarios where the password value is managed programmatically.',
            codeblock: {
              title: 'Controlled field',
              tabs: [
                {
                  code: './examples/controlled-field.html',
                  language: 'html',
                },

                {
                  code: './examples/controlled-field.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how the password field can be integrated into a form alongside other input fields, such as an email field, to create a complete login or registration form.',
            codeblock: {
              title: 'In form layout',
              tabs: [
                {
                  code: './examples/in-form-layout.html',
                  language: 'html',
                },

                {
                  code: './examples/in-form-layout.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a password field with dynamic password strength validation, showing real-time feedback on password complexity requirements.',
            codeblock: {
              title: 'With password strength requirements',
              tabs: [
                {
                  code: './examples/with-password-strength-requirements.html',
                  language: 'html',
                },

                {
                  code: './examples/with-password-strength-requirements.jsx',
                  language: 'preview-jsx',
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
