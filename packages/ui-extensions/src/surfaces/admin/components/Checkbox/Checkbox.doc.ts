import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Checkbox';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/checkbox.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Ensure independence:** Each checkbox should work independently from others, allowing merchants to select any combination of options.
- **Always include labels:** Provide descriptive labels when checkboxes activate or deactivate settings to ensure clarity.
- **Order logically:** List checkboxes in a logical sequence like alphabetical, numerical, or time-based to help merchants find options easily.
- **Use indeterminate state appropriately:** Apply the indeterminate state for "select all" functionality when only some items in a group are selected.
- **Provide help text:** Include descriptive details text to give additional context about checkbox options when needed.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the checkbox component.',
      type: 'Checkbox',
    },
    {
      title: 'Events',
      description:
        'The checkbox component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'CheckboxEvents',
    },
  ],
  defaultExample: {
    image: 'checkbox-default.png',
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
              'Checkbox in indeterminate state, commonly used for "select all" functionality when some items are selected.',
            codeblock: {
              title: 'Indeterminate state',
              tabs: [
                {
                  code: './examples/indeterminate-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Checkbox with validation error message for required form fields.',
            codeblock: {
              title: 'Error state',
              tabs: [
                {
                  code: './examples/error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Checkbox with descriptive details text to provide additional context about the option.',
            codeblock: {
              title: 'Help text',
              tabs: [
                {
                  code: './examples/help-text.html',
                  language: 'html',
                },

                {
                  code: './examples/help-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              "Checkbox in disabled state with explanatory details about why it's unavailable.",
            codeblock: {
              title: 'Disabled state',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Multiple checkboxes for different configuration options with helpful details.',
            codeblock: {
              title: 'Settings group',
              tabs: [
                {
                  code: './examples/settings-group.html',
                  language: 'html',
                },

                {
                  code: './examples/settings-group.jsx',
                  language: 'preview-jsx',
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
              'Interactive example showing required checkbox validation with dynamic error messages.',
            codeblock: {
              title: 'Checkbox validation',
              tabs: [
                {
                  code: './examples/validation-example.jsx',
                  language: 'preview-jsx',
                  layout: 'formWrapper',
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
