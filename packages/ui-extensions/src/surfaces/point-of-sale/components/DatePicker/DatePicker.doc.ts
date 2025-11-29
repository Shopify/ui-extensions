import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'The `DatePicker` component allows merchants to select a specific date using a calendar-like picker interface. Use it to provide visual date selection with an intuitive calendar view for improved user experience.' +
    '\n\n`DatePicker` offers a calendar-based alternative to [spinner-style pickers](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/datespinner) when visual calendar context is beneficial. The calendar interface allows merchants to see dates in context of the full month, making it easier to select dates relative to specific days of the week or to visualize date ranges within a month view.',
  thumbnail: 'date-picker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DatePicker` component.',
      type: 'DatePicker',
    },
    {
      title: 'Events',
      description:
        'The `DatePicker` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DatePickerEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose for calendar-based selection:** Use \`DatePicker\` when users benefit from seeing a calendar view, like selecting dates relative to today or needing weekday context. Use [\`DateSpinner\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/datespinner) for tight spaces or [\`DateField\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/datefield) when users know the exact date.
- **Provide adequate space:** Ensure sufficient spacing around the picker to avoid interfering with on-screen keyboards or other interactive elements.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`DatePicker\` provides the calendar interface but requires external state management for the selected value—you must update the \`value\` property in response to change events.
- The component supports single dates, multiple dates, and date ranges through value format alone—the selection mode is inferred from the \`value\` property format rather than an explicit property.
- Invalid date values result in no date being selected—the component doesn't provide specific error feedback, so you must validate date formats before setting the \`value\` property.
`,
    },
  ],
  defaultExample: {
    image: 'date-picker-default.png',
    description:
      'Enable visual date selection using a `DatePicker` component with a calendar interface. This example shows a basic date picker with month view and date selection.',
    codeblock: {
      title: 'Select dates with a calendar picker',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
  examples: {
    description:
      'Learn how to control picker visibility and handle date selection events.',
    examples: [
      {
        description:
          'Control `DatePicker` visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the calendar picker, enabling custom trigger patterns for date selection workflows.',
        codeblock: {
          title: 'Control picker visibility',
          tabs: [
            {
              code: './examples/command-system.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Subscribe to date selection events to respond when merchants pick a date from the calendar. This example shows how to handle `onChange` events to capture selected dates, enabling validation, scheduling logic, or dynamic updates based on the chosen date.',
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
