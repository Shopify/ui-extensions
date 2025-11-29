import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'The `DateField` component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.' +
    '\n\n`DateField` components support both manual text entry and picker selection, giving merchants flexibility to choose their preferred input method based on personal preference and specific date entry scenarios.' +
    '\n\nFor visual calendar-based selection, consider [`DatePicker`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datepicker). For space-constrained layouts with scrolling date selection, use [`DateSpinner`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datespinner).',
  thumbnail: 'date-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DateField` component.',
      type: 'DateField',
    },
    {
      title: 'Events',
      description:
        'The `DateField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DateFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-field-default.png',
    description:
      'Capture date input using a `DateField` component with built-in validation and picker integration. This example shows a basic date field with label and placeholder text.',
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
- **Choose for direct text input:** Use \`DateField\` when users know the exact date and can type it efficiently. Use [\`DatePicker\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datepicker) for calendar selection or [\`DateSpinner\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datespinner) for space-constrained layouts.
- **Explain date constraints:** Use \`details\` to clarify requirements like "Select a date within the next 30 days" or "Must be a future date."
- **Write actionable error messages:** Provide clear validation messages for invalid dates that help users correct their input.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`DateField\` accepts date values in ISO 8601 format (\`YYYY-MM-DD\`)—other date formats require conversion before setting the value property.
- Validation occurs when the user finishes editing rather than on every keystroke—invalid dates are only flagged after blur, which may delay error feedback.
- The component provides text-based date input—for calendar-style date selection, use the [\`DatePicker\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datepicker) component which offers visual date selection interface.
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
