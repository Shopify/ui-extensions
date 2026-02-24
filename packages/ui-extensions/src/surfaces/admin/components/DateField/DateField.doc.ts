import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/DateField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/datefield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use smart defaults and highlight common selections
- Use \`allow\` and \`disallow\` properties to restrict selectable dates appropriately
- Provide clear labels and use details text to explain date restrictions
- Don't use for dates that are many years in the future or the past`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DateField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'DateFieldEvents',
    },
  ],
  examples: {
    description: 'Component examples',
    examples: [
      {
        description:
          'Add a date field to let merchants select a date using a built-in calendar picker. This example shows a basic date field with a default view and pre-selected value.',
        codeblock: {
          title: 'Add a basic date field',
          tabs: [
            {
              code: './examples/default.html',
              language: 'html',
              layout: 'alignStart',
              customStyles: {
                minHeight: '300px',
              },
            },
          ],
        },
      },
      {
        description:
          'Collect a date from merchants with a labeled input and placeholder text. This example shows a date field configured with a label, name, and placeholder.',
        codeblock: {
          title: 'Collect a date with a label and placeholder',
          tabs: [
            {
              code: './examples/basic-usage.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Pre-populate a date field so merchants can review or edit a provided date. This example shows a date field with a value already set.',
        codeblock: {
          title: 'Pre-populate with an existing date',
          tabs: [
            {
              code: './examples/with-default-value.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Restrict which days of the week merchants can select, such as excluding weekends. This example shows a date field that only allows weekday selections.',
        codeblock: {
          title: 'Restrict selectable days of the week',
          tabs: [
            {
              code: './examples/with-date-restrictions.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Limit selection to a specific set of dates, such as available appointment slots. This example shows a date field that only allows dates from a predefined list.',
        codeblock: {
          title: 'Allow only specific dates',
          tabs: [
            {
              code: './examples/with-specific-allowed-dates.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Display an error message when a required date is missing or an invalid date is entered. This example shows a date field with a static error and the required attribute.',
        codeblock: {
          title: 'Show a validation error',
          tabs: [
            {
              code: './examples/with-error-state.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Prevent editing by making a date field read-only or fully disabled. This example shows a read-only field for viewing a creation date and a disabled field for an archived date.',
        codeblock: {
          title: 'Disable or make a date field read-only',
          tabs: [
            {
              code: './examples/disabled-and-read-only-states.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Combine date fields with other form elements like text fields and buttons. This example shows a complete order form with a required date, a weekday-restricted delivery date, and a submit button.',
        codeblock: {
          title: 'Use date fields in a form',
          tabs: [
            {
              code: './examples/form-integration.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Pair two date fields to let merchants define a start and end date for a range. This example shows side-by-side date fields for selecting a report period.',
        codeblock: {
          title: 'Select a date range with two fields',
          tabs: [
            {
              code: './examples/date-range-selection.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Validate a date field in real time and update the error message as the merchant interacts. This example shows a required date field that clears its error once a valid date is selected.',
        codeblock: {
          title: 'Validate a date field dynamically',
          tabs: [
            {
              code: './examples/validation-example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
