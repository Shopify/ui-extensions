import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TimeField',
  description:
    'The `TimeField` component captures time input with a consistent interface for time selection and validation. Use it to collect time information in scheduling, booking, or data entry workflows.' +
    '\n\nThe component supports both 12-hour and 24-hour time formats based on locale settings, with built-in validation to ensure valid time entries. It includes features like time picker integration, keyboard shortcuts, and formatted display to streamline time entry for scheduling, appointment booking, and time-sensitive operations in retail environments.' +
    '\n\n`TimeField` components respects merchant locale settings for default time format preferences while allowing manual override for specific use cases that require alternative formats.',
  thumbnail: 'time-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TimeField` component.',
      type: 'TimeField',
    },
    {
      title: 'Events',
      description:
        'The `TimeField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TimeFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'time-field-default.png',
    description:
      'Capture time input using a `TimeField` component with locale-aware formatting. This example shows a basic time field with label and time validation.',
    codeblock: {
      title: 'Capture time input with a time field',
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
- **Use correct format:** Always use \`HH:mm:ss\` format with leading zeros (like \`"09:05:00"\` not \`"9:5:0"\`).
- **Explain time constraints:** Use \`details\` to clarify requirements like "Business hours only (09:00-17:00)" or "Must be a future time."
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`TimeField\` accepts time values in 24-hour \`HH:mm:ss\` format only—12-hour times or other formats require conversion before setting the value property.
- The component provides text-based time input—for visual time selection with clock or spinner interfaces, use the \`TimePicker\` component which offers interactive time selection.
- Validation occurs when the user finishes editing rather than on every keystroke—invalid times are only flagged after blur, which may delay error feedback.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to handle time selection events and validate time input.',
    examples: [
      {
        description:
          'Subscribe to time input events to respond when merchants select or enter times. This example shows how to handle `onChange` events to capture time selections, enabling real-time validation, time range checks, or dynamic scheduling behavior based on merchant input.',
        codeblock: {
          title: 'Handle time selection events',
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
