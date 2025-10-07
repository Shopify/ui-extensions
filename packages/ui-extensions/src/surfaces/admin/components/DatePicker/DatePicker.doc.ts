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
              'Demonstrates a date picker configured for selecting a single date with a default value and specific month view.',
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
              'Demonstrates how to handle onChange callbacks for both single and range date pickers, showing how to extract and process the selected values.',
            codeblock: {
              title: 'Handling onChange callbacks',
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
              'Illustrates a date picker with quick preset buttons and onChange callback to capture user selections and update the displayed value.',
            codeblock: {
              title: 'With quick date selection',
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
        ],
      },
    ],
  },
};

export default data;
