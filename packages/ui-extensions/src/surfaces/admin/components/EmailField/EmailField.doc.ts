import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/EmailField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/emailfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Write descriptive labels:** Use specific labels like **Customer Email**, **Receipt Email Address**, or **Order Notification Email** rather than generic **Email** or **Email Address**.
- **Provide context in details:** Use \`details\` for additional context like "Required for digital receipts" or "We'll send order updates to this address."
- **Show format examples in placeholders:** Use placeholders like **you@example.com** or **support@yourstore.com** to demonstrate expected format, but don't repeat the label text.
- **Write actionable error messages:** Provide clear validation messages like "Please enter a valid email address" or "Email must include @ symbol" that help merchants correct their input.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Email addresses can't exceed 254 characters total per RFC 5321. Setting \`maxLength\` higher than 254 allows values that will fail during email delivery.
- Different browsers implement email validation differently. Always validate email format server-side for critical functionality.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the email field component.',
      type: 'EmailField',
    },
    {
      title: 'Events',
      description:
        'The email field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'EmailFieldEvents',
    },
  ],
  defaultExample: {
    image: 'emailfield-default.png',
    description:
      'Collect an email address from merchants with a labeled input and helper text. This example shows a basic email field with a placeholder and details text.',
    codeblock: {
      title: 'Add a basic email field',
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
              'Display an error message and help text to guide merchants toward entering a valid email. This example shows a required email field with both a details hint and an error message.',
            codeblock: {
              title: 'Show an error with help text',
              tabs: [
                {
                  code: './examples/with-error-and-help-text.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display an existing email address that merchants can see but not edit. This example shows a read-only email field with a pre-filled value.',
            codeblock: {
              title: 'Make an email field read-only',
              tabs: [
                {
                  code: './examples/read-only-display.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Disable an email field to prevent all interaction while keeping the value visible. This example shows a disabled field with a pre-filled email address.',
            codeblock: {
              title: 'Disable an email field',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set minimum and maximum character lengths to add validation beyond the standard email format check. This example shows a required email field with minLength and maxLength constraints.',
            codeblock: {
              title: 'Set character length constraints',
              tabs: [
                {
                  code: './examples/with-length-constraints.html',
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
