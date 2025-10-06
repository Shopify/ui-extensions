import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Checkbox';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/checkbox.png',
  isVisualComponent: true,
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
                  code: './examples/indeterminate-state.html',
                  language: 'html',
                },

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
              'Multiple checkboxes for different merchant configuration options with helpful details.',
            codeblock: {
              title: 'Merchant settings group',
              tabs: [
                {
                  code: './examples/merchant-settings-group.html',
                  language: 'html',
                },

                {
                  code: './examples/merchant-settings-group.jsx',
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
