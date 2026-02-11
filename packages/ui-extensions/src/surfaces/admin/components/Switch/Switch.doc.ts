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
        'Configure the following properties on the Switch component.',
      type: 'Switch',
    },
    {
      title: 'Events',
      description:
        'The Switch component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'SwitchEvents',
    },
  ],
  defaultExample: {
    description:
      'Create a toggle switch for on/off settings. Click to interact with the preview.',
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
              'Enable or disable a merchant preference with a labeled toggle.',
            codeblock: {
              title: 'Enable a preference',
              tabs: [
                {
                  code: './examples/basic-switch.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-switch.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
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
              'Collect multiple notification preferences in a single form.',
            codeblock: {
              title: 'Collect multiple settings',
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
          {
            description:
              'Arrange multiple switches in a vertical stack for organized settings. Click to interact with the preview.',
            codeblock: {
              title: 'Create a settings panel',
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
