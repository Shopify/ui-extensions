import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Time picker',
  description:
    'The time picker component allows merchants to select times using an interactive picker interface. Use it when merchants benefit from visual time selection rather than typing exact times.' +
    '\n\nFor direct text entry when merchants know the exact time, use [time field](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/time-field).',
  thumbnail: 'time-spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the time picker component.',
      type: 'TimePicker',
    },
    {
      title: 'Events',
      description:
        'The time picker component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TimePickerEvents',
    },
  ],
  category: 'Web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'time-spinner-default.png',
    description:
      'Select times using a time picker component. This example shows a basic time picker for selecting hours and minutes.',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose for visual time selection:** Use time picker when users benefit from a visual picker interface. Use [time field](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/forms/time-field) when users know the exact time.
- **Use correct format:** Always use \`HH:mm:ss\` format with leading zeros. The internal format is always 24-hour regardless of UI presentation.
- **Validate before setting values:** Invalid values reset to empty string. Implement validation to show appropriate error messages.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to control picker visibility and handle time selection events.',
    examples: [
      {
        description:
          'Control time picker visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the time picker, enabling custom trigger patterns for time selection workflows.',
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
