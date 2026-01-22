import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateSpinner',
  description:
    'The `DateSpinner` component enables merchants to select dates using a spinner interface with scrollable columns for month, day, and year. Use it for compact date selection in space-constrained layouts or when selecting dates close to the current date.' +
<<<<<<< HEAD
    '\n\nFor visual calendar context, consider using [`DatePicker`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datepicker) instead. For text date entry, use [`DateField`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datefield).',
=======
    '\n\nFor visual calendar context, consider using [`DatePicker`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/datepicker) instead. For text date entry, use [`DateField`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/datefield).',
>>>>>>> 2025-10
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use for space-constrained layouts:** Choose \`DateSpinner\` for narrow layouts or split-screen interfaces where a calendar view would be impractical.
<<<<<<< HEAD
- **Best for nearby dates:** Use when selecting dates close to the current date. For distant dates, [\`DatePicker\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/datepicker) provides faster navigation.
=======
- **Best for nearby dates:** Use when selecting dates close to the current date. For distant dates, [\`DatePicker\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/forms/datepicker) provides faster navigation.
>>>>>>> 2025-10
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
