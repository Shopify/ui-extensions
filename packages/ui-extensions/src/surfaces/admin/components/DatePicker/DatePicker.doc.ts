import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/DatePicker';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/datepicker.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use smart defaults and highlight common selections
- Don't use to enter a date that is many years in the future or the past`,
    },
  ],
  definitions: [
    {
      title: 'DatePicker',
      description: '',
      type: 'DatePicker',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'DatePickerEvents',
    },
  ],
  defaultExample: {
    image: 'datepicker-default.png',
    description:
      'Add a calendar picker for selecting a date or date range. This example shows a range-type date picker with a pre-selected date range and a specific month view.',
    codeblock: {
      title: 'Add a date range picker',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Configure the picker for single date selection when merchants need to choose one specific date. This example shows a single-type date picker with a pre-selected date and month view.',
            codeblock: {
              title: 'Select a single date',
              tabs: [
                {
                  code: './examples/single-date-selection.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Restrict which dates merchants can select by defining an allowed range. This example shows a date picker that blocks past dates and limits selection to a specific month.',
            codeblock: {
              title: 'Restrict selectable dates to a range',
              tabs: [
                {
                  code: './examples/with-date-restrictions.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Capture the selected date when the merchant makes a change so you can update your app state. This example shows a range picker inside a form with an `onChange` handler that stores the selected value.',
            codeblock: {
              title: 'Capture date selections with onChange',
              tabs: [
                {
                  code: './examples/form-integration.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add preset buttons so merchants can quickly select common date ranges like "Last 7 days" or "This month." This example shows a range picker with quick-selection buttons that programmatically update the selected value.',
            codeblock: {
              title: 'Add quick preset date range buttons',
              tabs: [
                {
                  code: './examples/analytics-dashboard.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
