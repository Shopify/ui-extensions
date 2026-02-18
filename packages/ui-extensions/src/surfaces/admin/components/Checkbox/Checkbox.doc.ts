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
    image: 'checkbox-default.png',
    description:
      'Let users toggle a single option on or off. This example shows a checkbox with a label and helper text providing additional context. Click to interact with the preview.',
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
              'Indicate partial selection in bulk actions. This example shows a "select all" checkbox that displays an indeterminate state when some items are checked. Click to interact with the preview.',
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
              'Communicate when a required selection is missing. This example shows an error message displayed when the terms checkbox isn\'t checked. Click to interact with the preview.',
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
              'Indicate when an option isn\'t available. This example shows a disabled checkbox with helper text explaining how to enable it. Click to interact with the preview.',
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
              'Organize related options together. This example shows multiple checkboxes grouped in a settings panel with individual helper text. Click to interact with the preview.',
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
              'Provide immediate feedback on required selections. This example shows real-time validation with a dynamic error message when the checkbox is unchecked. Click to interact with the preview.',
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
