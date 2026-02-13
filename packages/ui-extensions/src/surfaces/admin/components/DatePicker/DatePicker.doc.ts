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
      sectionContent: `- **Use smart defaults:** Pre-populate the picker with sensible dates to speed up the selection process.
- **Provide quick selections:** Offer preset date options for common selections (like **Today**, **Last 7 days**, or **This month**) to improve usability.
- **Use date ranges when appropriate:** Enable range selection mode when merchants need to select start and end dates for reports, analytics, or time-based filters.
- **Restrict dates appropriately:** Use the \`allow\` and \`disallow\` properties to prevent selection of invalid dates for your specific use case.
- **Provide adequate space:** Ensure sufficient spacing around the picker to avoid interfering with on-screen keyboards or other interactive elements.
- **Consider alternatives for distant dates:** Navigating month-by-month becomes impractical for dates more than a few years away. For dates outside a 5-10 year range, consider providing date presets or manual year input.`,
    },
  ],
  definitions: [
    {
      title: 'DatePicker',
      description:
        'Configure the following properties on the DatePicker component.',
      type: 'DatePicker',
    },
    {
      title: 'Events',
      description:
        'The DatePicker component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
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
