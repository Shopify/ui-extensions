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
    description:
      'Let users toggle a single option on or off. This example shows a checkbox with a label and helper text providing additional context.',
    codeblock: {
      title: 'Select an option',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
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
              'Indicate partial selection in bulk actions. This example shows a "select all" checkbox that displays an indeterminate state when some items are checked.',
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
              'Communicate when a required selection is missing. This example shows an error message displayed when the terms checkbox isn\'t checked.',
            codeblock: {
              title: 'Show a validation error',
              tabs: [
                {
                  code: './examples/error-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Indicate when an option isn\'t available. This example shows a disabled checkbox with helper text explaining how to enable it.',
            codeblock: {
              title: 'Show a disabled checkbox',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Organize related options together. This example shows multiple checkboxes grouped in a settings panel with individual helper text.',
            codeblock: {
              title: 'Group multiple checkboxes',
              tabs: [
                {
                  code: './examples/settings-group.html',
                  language: 'preview',
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
              'Provide immediate feedback on required selections. This example shows real-time validation with a dynamic error message when the checkbox is unchecked.',
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
