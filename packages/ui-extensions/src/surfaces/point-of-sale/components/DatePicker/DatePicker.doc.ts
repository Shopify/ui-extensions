import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Date picker',
  description:
    'The date picker component allows merchants to select dates using a calendar interface. Use it when merchants benefit from seeing dates in context of the full month, such as selecting dates relative to today or needing weekday context.' +
    '\n\nThe component supports single dates, multiple dates, and date ranges. For tight spaces, consider using [date spinner](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-spinner) instead. For text date entry, use [date field](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-field).',
  thumbnail: 'date-picker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the date picker component.',
      type: 'DatePicker',
    },
    {
      title: 'Events',
      description:
        'The date picker component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DatePickerEvents',
    },
  ],
  category: 'Web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-picker-default.png',
    description:
      'Enable visual date selection using a date picker component with a calendar interface. This example shows a basic date picker with month view and date selection.',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose for calendar-based selection:** Use date picker when users benefit from seeing a calendar view, like selecting dates relative to today or needing weekday context. Use [date spinner](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-spinner) for tight spaces or [date field](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/date-field) when users know the exact date.
- **Provide adequate space:** Ensure sufficient spacing around the picker to avoid interfering with on-screen keyboards or other interactive elements.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to control picker visibility and handle date selection events.',
    examples: [
      {
        description:
          'Control date picker visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the calendar picker, enabling custom trigger patterns for date selection workflows.',
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
