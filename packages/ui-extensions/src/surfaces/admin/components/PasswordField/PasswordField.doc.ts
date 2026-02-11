import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/PasswordField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/passwordfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Support password managers:** Ensure the component works correctly with password managers by setting appropriate autocomplete values. Password managers help merchants create and store strong passwords, improving overall security.
- **Communicate requirements clearly:** Show all password requirements before merchants start typing, not after they've already entered an invalid password. This prevents frustration and reduces form abandonment.
- **Provide helpful feedback for password creation:** When merchants create new passwords, show real-time strength feedback and explain what would make their password stronger. Help them understand security trade-offs rather than just enforcing arbitrary rules.
- **Never block paste functionality:** Merchants rely on password managers and other tools that use paste. Blocking paste forces merchants toward weaker passwords they can remember and type manually.
- **Validate server-side:** Always validate passwords on the server. Client-side constraints can be bypassed by password managers, browser extensions, or merchants with developer tools. Use client-side validation for immediate feedback, not security.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't include a built-in show/hide password toggle. If you need this feature (recommended for better UX), you must implement it yourself by conditionally switching between a password field and a text field.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the PasswordField component.',
      type: 'PasswordField',
    },
    {
      title: 'Events',
      description:
        'The PasswordField component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
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
