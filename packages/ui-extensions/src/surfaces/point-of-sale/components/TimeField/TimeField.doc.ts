import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Time field',
  description:
    'The time field component captures time input through direct text entry. Use it when merchants know the exact time they want to enter or for quick time data entry.' +
    '\n\nFor visual time selection with clock or spinner interfaces, use [time picker](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/time-picker).',
  thumbnail: 'time-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the time field component.',
      type: 'TimeField',
    },
    {
      title: 'Events',
      description:
        'The time field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TimeFieldEvents',
    },
  ],
  category: 'Web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'time-field-default.png',
    description:
      'Capture time input using a time field component. This example shows a basic time field with a label for time entry.',
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
