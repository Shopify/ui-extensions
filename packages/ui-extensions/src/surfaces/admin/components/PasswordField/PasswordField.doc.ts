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
        'Configure the following properties on the password field component.',
      type: 'PasswordField',
    },
    {
      title: 'Events',
      description:
        'The password field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-web-components#handling-events).',
      type: 'PasswordFieldEvents',
    },
  ],
  defaultExample: {
    description:
      'Securely collect sensitive credentials from users. This example pairs a label with masked input.',
    codeblock: {
      title: 'Collect a password',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
              'Enforce password requirements before submission. This example configures a required field with minimum length validation and autocomplete for new passwords.',
            codeblock: {
              title: 'Set validation rules',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              "Communicate password problems clearly to users. This example displays an error message when the password doesn't meet length requirements.",
            codeblock: {
              title: 'Show validation errors',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Help users understand password requirements upfront. This example adds helper text beneath the field explaining what makes a valid password.',
            codeblock: {
              title: 'Add helper text',
              tabs: [
                {
                  code: './examples/with-helper-text.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Create a complete authentication form. This example combines a password field with an email field for login or registration.',
            codeblock: {
              title: 'Build a login form',
              tabs: [
                {
                  code: './examples/in-form-layout.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display a password requirements checklist alongside the field. This example lists requirements like character length and case requirements.',
            codeblock: {
              title: 'Display a requirement checklist',
              tabs: [
                {
                  code: './examples/with-password-strength-requirements.html',
                  language: 'preview',
                  title: '',
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
