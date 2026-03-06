import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Date spinner',
  description:
    'The date spinner component enables merchants to select dates using a spinner interface with scrollable columns for month, day, and year. Use it for compact date selection in space-constrained layouts or when selecting dates close to the current date.' +
    '\n\nFor visual calendar context, consider using [date picker](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/forms/date-picker) instead. For text date entry, use [date field](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/forms/date-field).',
  thumbnail: 'date-spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the date spinner component.',
      type: 'DateSpinner',
    },
    {
      title: 'Events',
      description:
        'The date spinner component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'DateSpinnerEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'date-spinner-default.png',
    description:
      'Enable compact date selection using a date spinner component with scrollable columns for month, day, and year. This example shows a basic date spinner for space-constrained layouts.',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use for space-constrained layouts:** Choose date spinner for narrow layouts or split-screen interfaces where a calendar view would be impractical.
- **Best for nearby dates:** Use when selecting dates close to the current date. For distant dates, [date picker](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/forms/date-picker) provides faster navigation.
- **Provide interaction cues:** Consider labels or instructions to help first-time users understand the scrollable column interface.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to control spinner visibility and handle date selection events.',
    examples: [
      {
        description:
          'Control date spinner visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the spinner picker, enabling custom trigger patterns for date selection in constrained layouts.',
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
