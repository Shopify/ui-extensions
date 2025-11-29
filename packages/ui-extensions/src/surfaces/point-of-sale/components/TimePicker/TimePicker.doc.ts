import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TimePicker',
  description:
    'The `TimePicker` component allows merchants to select a specific time using an interactive picker interface. Use it to provide visual time selection for improved user experience and reduced input errors.' +
    '\n\n`TimePicker` offers a more visual and touch-friendly alternative to [text-based time input](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/timefield), making time selection faster and more accurate. The picker interface provides an intuitive way to select hours and minutes through an interactive interface.',
  thumbnail: 'time-spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TimePicker` component.',
      type: 'TimePicker',
    },
    {
      title: 'Events',
      description:
        'The `TimePicker` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TimePickerEvents',
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
- **Choose for visual time selection:** Use \`TimePicker\` when users benefit from a visual picker interface. Use [\`TimeField\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/timefield) when users know the exact time.
- **Use correct format:** Always use \`HH:mm:ss\` format with leading zeros. The internal format is always 24-hour regardless of UI presentation.
- **Validate before setting values:** Invalid values reset to empty string. Implement validation to show appropriate error messages.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`TimePicker\` provides the picker interface but requires external state management for the selected value—you must update the value property in response to change events.
- The component uses 24-hour \`HH:mm:ss\` format internally—display formatting for 12-hour time or locale-specific formats requires additional formatting logic in your application.
- Invalid time values result in an empty string without specific error feedback—you must validate time formats before setting the value property to provide meaningful error messages to users.
`,
    },
  ],
  defaultExample: {
    image: 'time-spinner-default.png',
    description:
      'Enable visual time selection using a `TimePicker` component with an interactive picker interface. This example shows a basic time picker for selecting hours and minutes.',
    codeblock: {
      title: 'Select times with a time picker',
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
      'Learn how to control picker visibility and handle time selection events.',
    examples: [
      {
        description:
          'Control `TimePicker` visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the time picker, enabling custom trigger patterns for time selection workflows.',
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
          'Subscribe to time selection events to respond when merchants pick a time. This example shows how to handle `onChange` events to capture selected times, enabling validation, scheduling logic, or dynamic updates based on the chosen time.',
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
