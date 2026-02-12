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
      sectionContent: `- Use ChoiceList when rendering multiple checkboxes to provide a consistent and accessible selection interface
- Work independently from each other
- Be framed positively (e.g., "Publish store" not "Hide store")
- Always have a label when used to activate or deactivate a setting
- Be listed in a logical order (alphabetical, numerical, time-based, etc.)`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `- Start each option with a capital letter
- Don't use commas or semicolons at the end of each line
- Use first person when asking merchants to agree to terms (e.g., "I agree to the Terms of Service")`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Checkbox',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'CheckboxEvents',
    },
  ],
  defaultExample: {
    description:
      'Create a checkbox for selecting an option with a label and helper text. Click to interact with the preview.',
    codeblock: {
      title: 'Select an option',
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
        title: '',
        examples: [
          {
            description:
              'Show a partially selected state for "select all" when some items are checked. Click to interact with the preview.',
            codeblock: {
              title: 'Show an indeterminate state',
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
              'Display a validation error when a required checkbox isn\'t checked. Click to interact with the preview.',
            codeblock: {
              title: 'Show a validation error',
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
              'Add helper text to provide additional context about an option. Click to interact with the preview.',
            codeblock: {
              title: 'Add helper text',
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
              'Indicate an unavailable option with a disabled checkbox. Click to interact with the preview.',
            codeblock: {
              title: 'Show a disabled checkbox',
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
              'Group multiple checkboxes for related settings. Click to interact with the preview.',
            codeblock: {
              title: 'Group multiple checkboxes',
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
        title: '',
        examples: [
          {
            description:
              'Validate a required checkbox in real time with dynamic error messages. Click to interact with the preview.',
            codeblock: {
              title: 'Validate in real time',
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
