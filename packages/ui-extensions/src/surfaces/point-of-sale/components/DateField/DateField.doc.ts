import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Date field',
  description:
    'The date field component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.' +
    '\n\nThe component supports manual text entry. For visual calendar-based selection, consider using [date picker](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-picker) or [date spinner](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-spinner) components.',
  thumbnail: 'date-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the date field component.',
      type: 'DateField',
    },
    {
      title: 'Events',
      description:
        'The date field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DateFieldEvents',
    },
  ],
  category: 'Web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-field-default.png',
    description:
      'Capture date input using a date field component with built-in validation and picker integration. This example shows a basic date field with label and placeholder text.',
    codeblock: {
      title: 'Capture date input with a date field',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose for direct text input:** Use date field when users know the exact date and can type it efficiently. Use [date picker](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-picker) for calendar selection or [date spinner](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-spinner) for space-constrained layouts.
- **Explain date constraints:** Use \`details\` to clarify requirements like "Select a date within the next 30 days" or "Must be a future date."
- **Write actionable error messages:** Provide clear validation messages for invalid dates that help users correct their input.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to handle date selection events and validate date input.',
    examples: [
      {
        description:
          'Subscribe to date input events to respond when merchants select or enter dates. This example shows how to handle `onChange` events to capture date selections, enabling real-time validation, date range checks, or dynamic scheduling behavior based on merchant input.',
        codeblock: {
          title: 'Handle date selection events',
          tabs: [
            {
              code: './examples/event-handling.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
