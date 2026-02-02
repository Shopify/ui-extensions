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
      sectionContent: `
- **Choose for direct text input:** Use \`DateField\` when users know the exact date and can type it efficiently. Use \`DatePicker\` for calendar selection.
- **Explain date constraints:** Use \`details\` to clarify requirements like "Select a date within the next 30 days" or "Must be a future date."
- **Write actionable error messages:** Provide clear validation messages for invalid dates that help users correct their input.
`,
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Shows how to restrict selectable dates to weekdays only.',
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Demonstrates allowing only specific dates from a predefined list.',
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Complete form example showing date field with other form elements.',
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Example showing two date fields for selecting a date range.',
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
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Demonstrates date fields with business logic restrictions and validation.',
            codeblock: {
              title: 'Date fields with validation',
              tabs: [
                {
                  code: './examples/date-fields-with-validation.html',
                  language: 'html',
                },

                {
                  code: './examples/date-fields-with-validation.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '550px',
                  },
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Form validation',
        examples: [
          {
            description:
              'Interactive example showing required date field validation with dynamic error messages.',
            codeblock: {
              title: 'Date field validation',
              tabs: [
                {
                  code: './examples/validation-example.html',
                  language: 'html',
                },

                {
                  code: './examples/validation-example.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '450px',
                  },
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
