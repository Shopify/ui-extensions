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
      'Let users pick one option from a predefined list. This example shows a labeled dropdown with selectable options. Click to interact with the preview.',
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
              'Provide sorting controls for lists or tables. This example shows a dropdown with sort options and a pre-selected default value. Click to interact with the preview.',
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
              'Guide users before they make a selection. This example shows placeholder text that describes what the user should choose. Click to interact with the preview.',
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
              'Communicate selection problems clearly to users. This example shows an error message when a required selection is missing. Click to interact with the preview.',
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
              'Make long option lists easier to scan. This example shows options organized into logical groups like geographical regions. Click to interact with the preview.',
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
              'Visually indicate the purpose of a select field. This example shows a sort icon that signals filtering functionality. Click to interact with the preview.',
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
              'Lock a selection when changes aren\'t allowed. This example shows a disabled dropdown that preserves its selected value but prevents interaction. Click to interact with the preview.',
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
              'Respond to user selections with custom logic. This example shows the onChange event triggering an action when the user picks an option. Click to interact with the preview.',
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
