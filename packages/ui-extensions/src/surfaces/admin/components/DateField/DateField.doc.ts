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
      sectionContent: `- **Use smart defaults:** Pre-populate fields with sensible dates when editing existing data or suggesting common selections.
- **Restrict dates appropriately:** Use the \`allow\` and \`disallow\` properties to restrict selectable dates for your use case (like only future dates for scheduling or only weekdays for business operations).
- **Explain date constraints:** Use the \`details\` property to clarify requirements like "Select a date within the next 30 days" or "Must be a future date."
- **Write actionable error messages:** Provide clear validation messages for invalid dates that help merchants correct their input.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the date field component.',
      type: 'DateField',
    },
    {
      title: 'Events',
      description:
        'The date field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'DateFieldEvents',
    },
  ],
  defaultExample: {
    image: 'datefield-default.png',
    description:
      'Add a date field to let merchants select a date using a built-in calendar picker. This example shows a basic date field with a default view and pre-selected value.',
    codeblock: {
      title: 'Add a basic date field',
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
              'Collect a date from merchants with a labeled input and placeholder text. This example shows a date field configured with a label, name, and placeholder.',
            codeblock: {
              title: 'Collect a date with a label and placeholder',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
                  language: 'preview',
                  title: '',
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
