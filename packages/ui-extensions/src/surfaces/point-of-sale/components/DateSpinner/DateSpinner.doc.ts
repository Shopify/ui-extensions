import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateSpinner',
  description:
    'The `DateSpinner` component enables merchants to select a specific date using a spinner interface with scrollable columns for month, day, and year. Use it to provide compact date selection in constrained spaces.' +
    '\n\n`DateSpinner` offers an alternative to calendar-style pickers when space is limited or when users prefer scrolling through date values. The spinner interface allows merchants to select dates by scrolling through separate columns for month, day, and year, providing a compact and intuitive way to select dates in constrained layouts.',
  thumbnail: 'date-spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DateSpinner` component.',
      type: 'DateSpinner',
    },
    {
      title: 'Events',
      description:
        'The `DateSpinner` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'DateSpinnerEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Use for space-constrained layouts:** Choose `DateSpinner` for narrow layouts or split-screen interfaces where a calendar view would be impractical.\n' +
        '- **Best for nearby dates:** Use when selecting dates close to the current date. For distant dates, `DatePicker` provides faster navigation.\n' +
        '- **Provide interaction cues:** Consider labels or instructions to help first-time users understand the scrollable column interface.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- `DateSpinner` uses [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date format (`YYYY-MM-DD`) only—other date formats require conversion before setting the value property.\n' +
        '- The component provides spinner-based date selection exclusively—for calendar-style visual selection with month context, use the `DatePicker` component instead.\n' +
        "- `DateSpinner` doesn't include field labels, help text, or error messaging—combine with other UI elements or text components to provide complete form field experiences.",
    },
  ],
  defaultExample: {
    image: 'date-spinner-default.png',
    description:
      'Enable compact date selection using a `DateSpinner` component with scrollable columns for month, day, and year. This example shows a basic date spinner for space-constrained layouts.',
    codeblock: {
      title: 'Select dates with a spinner',
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
      'Learn how to control spinner visibility and handle date selection events.',
    examples: [
      {
        description:
          'Control `DateSpinner` visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the spinner picker, enabling custom trigger patterns for date selection in constrained layouts.',
        codeblock: {
          title: 'Control spinner visibility',
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
          'Subscribe to date selection events to respond when merchants pick a date from the spinner columns. This example shows how to handle `onChange` events to capture selected dates, enabling validation, scheduling logic, or dynamic updates based on the chosen date.',
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
