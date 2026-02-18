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
      'Securely collect sensitive credentials from users. This example shows a labeled password field with masked input. Click to interact with the preview.',
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
              'Enforce password requirements before submission. This example shows a required field with minimum length validation and autocomplete for new passwords. Click to interact with the preview.',
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
              'Communicate password problems clearly to users. This example shows an error message when the password doesn\'t meet length requirements. Click to interact with the preview.',
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
              'Help users understand password requirements upfront. This example shows helper text beneath the field explaining what makes a valid password. Click to interact with the preview.',
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
              'Create a complete authentication form. This example shows a password field combined with an email field for login or registration. Click to interact with the preview.',
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
              'Show users exactly what their password needs. This example shows a static checklist of requirements like character length and case requirements. Click to interact with the preview.',
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
              'Provide immediate feedback on password quality. This example shows real-time validation that checks requirements as the user types. Click to interact with the preview.',
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
