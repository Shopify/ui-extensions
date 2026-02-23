import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'The DateField component combines a text input with a [DatePicker](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/datepicker) dropdown, giving merchants a compact way to select a single date. It supports common form field props (label, error, and change handlers) along with calendar navigation controls.\n\nFor multi-date or range selection, use [DatePicker](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/datepicker) directly.',
  requires: '',
  thumbnail: 'datefield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the DateField component.',
      type: 'DateFieldProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'datefield-default.png',
    description:
      'Schedule a product launch date and save it from an action modal. This example uses `DateField` to capture the date, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that schedules the launch.',
    codeblock: {
      title: 'Schedule product launch date',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DateField/examples/basic-datefield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-datefield.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          "Validate that a selected date is in the future using the `error` prop. This example checks the expiration date against today's date on each change and displays an inline error for past dates, so merchants can only set valid expiry windows.",
        codeblock: {
          title: 'Validate future date selection',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DateField/examples/datefield-validation.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/datefield-validation.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Display historical dates as read-only reference fields using the `readOnly` prop. This example shows the product creation date and last warehouse sync date as non-editable fields, providing merchants with timeline context in a [block extension](/docs/api/admin-extensions/{API_VERSION}/components/settings-and-templates/adminblock).',
        codeblock: {
          title: 'Display read-only date references',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DateField/examples/datefield-readonly.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/datefield-readonly.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use DateField for single-date selection in forms:** DateField combines the familiar text input pattern with a calendar dropdown, making it ideal for form layouts where space is limited.
- **Write a clear label:** The required \`label\` prop tells merchants what date to select. Use specific labels like "Start date", "Ship by date", or "Event date".`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The text input portion of DateField expects dates in YYYY-MM-DD format. Other date formats entered manually might not be parsed correctly.
- DateField doesn't support time selection. If you need date and time, you must combine DateField with a separate time input.`,
    },
  ],
  related: [],
};

export default data;
