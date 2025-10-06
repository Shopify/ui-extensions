import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/DatePicker';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/datepicker.png',
  isVisualComponent: true,
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
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
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
              'Demonstrates a date picker configured for selecting a single delivery date with a default value.',
            codeblock: {
              title: 'Single date selection',
              tabs: [
                {
                  code: './examples/single-date-selection.html',
                  language: 'html',
                },

                {
                  code: './examples/single-date-selection.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a date picker set up for selecting a range of dates, such as for tracking a sales period.',
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
              'Illustrates how to restrict date selection to a specific date range, preventing selection of past or future dates outside the allowed period.',
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
              'Demonstrates how to disable specific days of the week, useful for business scheduling that excludes weekends.',
            codeblock: {
              title: 'Disable specific days',
              tabs: [
                {
                  code: './examples/disable-specific-days.html',
                  language: 'html',
                },

                {
                  code: './examples/disable-specific-days.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to set a specific month view for the date picker, useful for focusing on a particular period.',
            codeblock: {
              title: 'Current month view',
              tabs: [
                {
                  code: './examples/current-month-view.html',
                  language: 'html',
                },

                {
                  code: './examples/current-month-view.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates integrating a date range picker into a form for filtering orders by date.',
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
              'Illustrates a date picker used in an analytics dashboard with quick date range selection buttons.',
            codeblock: {
              title: 'Analytics dashboard',
              tabs: [
                {
                  code: './examples/analytics-dashboard.html',
                  language: 'html',
                },

                {
                  code: './examples/analytics-dashboard.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows a date picker for scheduling product deliveries with restrictions on past dates and weekend selections.',
            codeblock: {
              title: 'Schedule management',
              tabs: [
                {
                  code: './examples/schedule-management.html',
                  language: 'html',
                },

                {
                  code: './examples/schedule-management.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates form date validation with a required single date picker that prevents selecting past dates.',
            codeblock: {
              title: 'Date validation',
              tabs: [
                {
                  code: './examples/date-validation.html',
                  language: 'html',
                },

                {
                  code: './examples/date-validation.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a date range picker with validation constraints for selecting campaign dates within a specific year.',
            codeblock: {
              title: 'Date range validation',
              tabs: [
                {
                  code: './examples/date-range-validation.html',
                  language: 'html',
                },

                {
                  code: './examples/date-range-validation.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Presents multiple commerce-related date picker scenarios including product launch dates, sales promotion periods, and inventory restock scheduling.',
            codeblock: {
              title: 'Commerce examples',
              tabs: [
                {
                  code: './examples/commerce-examples.html',
                  language: 'html',
                },

                {
                  code: './examples/commerce-examples.jsx',
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
