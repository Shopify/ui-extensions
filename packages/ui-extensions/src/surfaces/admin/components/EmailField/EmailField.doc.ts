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
        'Configure the following properties on the EmailField component.',
      type: 'EmailField',
    },
    {
      title: 'Events',
      description:
        'The EmailField component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
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
