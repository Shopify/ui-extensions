import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from '../../../../docs/shared/components/Form';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/form.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Group related fields logically:** Organize fields by category or workflow step so merchants can complete forms efficiently.
- **Validate with specific error messages:** Instead of **Invalid input**, provide actionable feedback like **Email must include @ symbol** or **Password must be at least 8 characters**.
- **Mark required fields clearly:** Use the \`required\` property and show validation errors only after user interaction or submission attempt.
- **Choose field types that match data:** Use [email field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/email-field) for emails, [number field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/number-field) for quantities, and [date field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/date-field) for dates to provide appropriate keyboards and pickers.
- **Provide submission feedback:** Show loading states during processing and clear success or error messages after completion. Prevent duplicate submissions while processing.
- **Handle unsaved changes:** For long or complex forms, consider auto-saving drafts or prompting before navigation when changes exist.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Unlike native HTML forms, the component doesn't automatically submit data using HTTP. You must register a \`submit\` event handler to process form data programmatically.`,
    },
  ],
  definitions: [
    {
      title: 'Events',
      description:
        'The form component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'FormEvents',
    },
  ],
  defaultExample: {
    description:
      'Group input fields that submit together when a merchant presses Enter or clicks a submit button. This example shows a basic form with a [text field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/text-field) and submit [button](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/actions/button).',
    codeblock: {
      title: 'Submit a basic form',
      tabs: [
        {
          title: '',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: '',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use specialized field types like [date field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/date-field) and [money field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/money-field) to collect structured campaign data. This example includes a reset button alongside submit so merchants can clear and start over.',
            codeblock: {
              title: 'Build a campaign form with date and money fields',
              tabs: [
                {
                  title: '',
                  code: './examples/with-multiple-fields.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Display specific error messages on individual fields to guide merchants toward valid input. This example shows a required [text field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/text-field) and [number field](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/number-field) with inline validation errors.',
            codeblock: {
              title: 'Show field validation errors',
              tabs: [
                {
                  title: '',
                  code: './examples/with-validation.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Mix text inputs with [selects](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/select) and [checkboxes](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/forms/checkbox) to capture different kinds of merchant decisions. This example combines a text field, a select dropdown, and a checkbox for creating a discount.',
            codeblock: {
              title: 'Use select and checkbox fields',
              tabs: [
                {
                  title: '',
                  code: './examples/with-choice-fields.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Organize a longer form into labeled groups so merchants can scan and complete it more easily. This example uses [sections](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/layout-and-structure/section) to separate contact information from shipping preferences.',
            codeblock: {
              title: 'Group fields into sections',
              tabs: [
                {
                  title: '',
                  code: './examples/with-sections.html',
                  language: 'preview',
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
