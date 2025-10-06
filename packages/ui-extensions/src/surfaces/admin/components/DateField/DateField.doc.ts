import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/DateField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/datefield.png',
  isVisualComponent: true,
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
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'alignStart',
          customStyles: {
            minHeight: '300px',
          },
        },
        {
          code: './examples/default.jsx',
          layout: 'alignStart',
          customStyles: {
            minHeight: '300px',
          },
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Simple date field for collecting a single date with a descriptive label.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Date field pre-populated with a specific date for editing existing data.',
            codeblock: {
              title: 'With default value',
              tabs: [
                {
                  code: './examples/with-default-value.html',
                  language: 'html',
                },

                {
                  code: './examples/with-default-value.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to restrict selectable dates to weekdays only, useful for business day selections.',
            codeblock: {
              title: 'With date restrictions',
              tabs: [
                {
                  code: './examples/with-date-restrictions.html',
                  language: 'html',
                },

                {
                  code: './examples/with-date-restrictions.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates allowing only specific dates, useful for appointment or event scheduling.',
            codeblock: {
              title: 'With specific allowed dates',
              tabs: [
                {
                  code: './examples/with-specific-allowed-dates.html',
                  language: 'html',
                },

                {
                  code: './examples/with-specific-allowed-dates.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Date field showing validation error for required field or invalid date entry.',
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows date fields in different interaction states for viewing-only or disabled forms.',
            codeblock: {
              title: 'Disabled and read-only states',
              tabs: [
                {
                  code: './examples/disabled-and-read-only-states.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-and-read-only-states.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Complete form example showing date field with other form elements for order processing.',
            codeblock: {
              title: 'Form integration',
              tabs: [
                {
                  code: './examples/form-integration.html',
                  language: 'html',
                },

                {
                  code: './examples/form-integration.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Example showing two date fields for selecting a date range, common in reporting and filtering.',
            codeblock: {
              title: 'Date range selection',
              tabs: [
                {
                  code: './examples/date-range-selection.html',
                  language: 'html',
                },

                {
                  code: './examples/date-range-selection.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates date fields for configuring promotional campaigns with business logic restrictions.',
            codeblock: {
              title: 'Promotional period setup',
              tabs: [
                {
                  code: './examples/promotional-period-setup.html',
                  language: 'html',
                },

                {
                  code: './examples/promotional-period-setup.jsx',
                  language: 'preview-jsx',
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
