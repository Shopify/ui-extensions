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
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'SwitchEvents',
    },
  ],
  defaultExample: {
    description:
      'Give users a clear way to turn a feature on or off. This example shows a labeled toggle switch for enabling a preference. Click to interact with the preview.',
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
              'Indicate when a feature isn\'t available. This example shows a locked switch that prevents interaction while showing its current state. Click to interact with the preview.',
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
              'Collect multiple settings that save together. This example shows switches grouped in a form for batch submission. Click to interact with the preview.',
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
              'Apply changes instantly without a save button. This example shows switches arranged in a panel where each toggle takes effect immediately. Click to interact with the preview.',
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
              'Keep switches accessible when labels aren\'t visually needed. This example shows a visually hidden label that screen readers can still announce. Click to interact with the preview.',
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
              'Communicate switch-related problems clearly. This example shows helper text with an error message when a required switch isn\'t enabled. Click to interact with the preview.',
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
              'Provide extra context for screen reader users. This example shows an accessibility label that gives more detail than the visible label alone. Click to interact with the preview.',
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
              'Respond to toggle changes with custom logic. This example shows state tracking that displays the current value when the switch is toggled. Click to interact with the preview.',
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
