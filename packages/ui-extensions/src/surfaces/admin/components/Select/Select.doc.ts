import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Select';
import optionSharedContent from '../../../../docs/shared/components/Option';
import optionGroupSharedContent from '../../../../docs/shared/components/OptionGroup';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/select.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Select',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'SelectEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'SelectSlots',
    },
    {
      title: optionSharedContent.name,
      description: optionSharedContent.description,
      type: 'Option',
    },
    {
      title: 'Slots',
      description: '',
      type: 'OptionSlots',
    },
    {
      title: optionGroupSharedContent.name,
      description: optionGroupSharedContent.description,
      type: 'OptionGroup',
    },
    {
      title: 'Slots',
      description: '',
      type: 'OptionGroupSlots',
    },
  ],
  defaultExample: {
    description:
      'Create a dropdown with selectable options. Click to interact with the preview.',
    codeblock: {
      title: 'Create a dropdown menu',
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
              'Create a dropdown with a pre-selected value for sorting options. Click to interact with the preview.',
            codeblock: {
              title: 'Add sorting options',
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
              'Add placeholder text to guide users on what to select. Click to interact with the preview.',
            codeblock: {
              title: 'Add placeholder text',
              tabs: [
                {
                  code: './examples/with-placeholder.html',
                  language: 'html',
                },

                {
                  code: './examples/with-placeholder.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display an error message when validation fails. Click to interact with the preview.',
            codeblock: {
              title: 'Show validation errors',
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
              'Organize options into logical groups such as geographical regions. Click to interact with the preview.',
            codeblock: {
              title: 'Group options by category',
              tabs: [
                {
                  code: './examples/with-option-groups.html',
                  language: 'html',
                },

                {
                  code: './examples/with-option-groups.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Add a sort icon to indicate filtering functionality. Click to interact with the preview.',
            codeblock: {
              title: 'Add an icon',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'html',
                },

                {
                  code: './examples/with-icon.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Prevent user interaction while preserving the selected value. Click to interact with the preview.',
            codeblock: {
              title: 'Disable the select',
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
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Trigger an action when the user selects an option using the onChange event. Click to interact with the preview.',
            codeblock: {
              title: 'Handle selection changes',
              tabs: [
                {
                  code: './examples/handle-selection-change.jsx',
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
