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
    description:
      'Create a password field with masked input and a label. Click to interact with the preview.',
    codeblock: {
      title: 'Collect a password',
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
              'Add a label, required validation, and minimum length of 8 characters with autocomplete for new passwords. Click to interact with the preview.',
            codeblock: {
              title: 'Set validation rules',
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
              'Display an error message when the password doesn\'t meet length requirements. Click to interact with the preview.',
            codeblock: {
              title: 'Show validation errors',
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
              'Add helper text to guide users on password requirements. Click to interact with the preview.',
            codeblock: {
              title: 'Add helper text',
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
              'Combine the password field with an email field to create a login or registration form. Click to interact with the preview.',
            codeblock: {
              title: 'Build a login form',
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
              'Display a static checklist of password requirements. Click to interact with the preview.',
            codeblock: {
              title: 'Display a requirement checklist',
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
      {
        title: '',
        examples: [
          {
            description:
              'Validate password strength in real time as the user types. Click to interact with the preview.',
            codeblock: {
              title: 'Validate password strength',
              tabs: [
                {
                  code: './examples/password-strength-validation.jsx',
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
