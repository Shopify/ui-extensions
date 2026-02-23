import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Switch';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/switch.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Don't combine with save buttons:** Switches apply changes instantly when toggled, so combining them with save buttons creates confusion about when changes take effect.
- **Make the controlled setting clear:** Merchants should immediately understand what setting the switch controls and what each state means. Ambiguous labels force merchants to toggle the switch just to figure out what it does.
- **Explain the impact:** Merchants need to understand the consequences of toggling a switch, especially for settings that affect important functionality or data. Without context, merchants might hesitate to change settings or make uninformed decisions.
- **Organize related settings thoughtfully:** When presenting multiple switches, group related settings together and order them logically. A well-organized settings interface helps merchants find and configure options efficiently.
- **Make unavailable options understandable:** When a switch is disabled due to permissions, dependencies, or plan limitations, explain why. Users should know whether the limitation is temporary or permanent and what they need to do to access the setting.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the switch component.',
      type: 'Switch',
    },
    {
      title: 'Events',
      description:
        'The switch component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'SwitchEvents',
    },
  ],
  defaultExample: {
    description:
      'Give users a clear way to turn a feature on or off. This example shows a labeled toggle switch for enabling a preference.',
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
              "Indicate when a feature isn't available. This example shows a locked switch that prevents interaction while showing its current state.",
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
              'Collect multiple settings that save together. This example shows switches grouped in a form for batch submission.',
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
              'Apply changes instantly without a save button. This example shows switches arranged in a panel where each toggle takes effect immediately.',
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
              "Keep switches accessible when labels aren't visually needed. This example shows a visually hidden label that screen readers can still announce.",
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
              "Communicate switch-related problems clearly. This example shows helper text with an error message when a required switch isn't enabled.",
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
              'Provide extra context for screen reader users. This example shows an accessibility label that gives more detail than the visible label alone.',
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
              'Respond to toggle changes with custom logic. This example shows state tracking that displays the current value when the switch is toggled.',
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
