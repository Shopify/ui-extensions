import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Switch';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/switch.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Switch',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/polaris/using-polaris-web-components#event-handling).',
      type: 'SwitchEvents',
    },
  ],
  defaultExample: {
    description:
      'Create a toggle switch for on/off settings or to enable a preference. Click to interact with the preview.',
    codeblock: {
      title: 'Toggle a setting',
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
              'Indicate an unavailable feature with a locked switch. Click to interact with the preview.',
            codeblock: {
              title: 'Show a disabled switch',
              tabs: [
                {
                  code: './examples/disabled-switch.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-switch.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Group switches in a form for batch submission with a save action. Click to interact with the preview.',
            codeblock: {
              title: 'Submit multiple settings in a form',
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
              'Arrange switches that take effect instantly without form submission. Click to interact with the preview.',
            codeblock: {
              title: 'Apply multiple settings immediately',
              tabs: [
                {
                  code: './examples/settings-panel-with-stack.html',
                  language: 'html',
                },

                {
                  code: './examples/settings-panel-with-stack.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Hide the label visually while keeping it accessible to screen readers. Click to interact with the preview.',
            codeblock: {
              title: 'Hide the label visually',
              tabs: [
                {
                  code: './examples/hidden-label-for-accessibility.html',
                  language: 'html',
                },

                {
                  code: './examples/hidden-label-for-accessibility.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display helper text and an error message when validation fails. Click to interact with the preview.',
            codeblock: {
              title: 'Show validation errors',
              tabs: [
                {
                  code: './examples/with-details-and-error.html',
                  language: 'html',
                },

                {
                  code: './examples/with-details-and-error.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Provide additional context for screen reader users beyond the visible label. Click to interact with the preview.',
            codeblock: {
              title: 'Add an accessibility label',
              tabs: [
                {
                  code: './examples/switch-with-accessibility-label.html',
                  language: 'html',
                },

                {
                  code: './examples/switch-with-accessibility-label.jsx',
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
              'Track switch state changes and display current values. Click to interact with the preview.',
            codeblock: {
              title: 'Track toggle state',
              tabs: [
                {
                  code: './examples/toggle-with-feedback.jsx',
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
