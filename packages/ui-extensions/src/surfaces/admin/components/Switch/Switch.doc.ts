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
        'Configure the following properties on the `Switch` component.',
      type: 'Switch',
    },
    {
      title: 'Events',
      description:
        'The `Switch` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'SwitchEvents',
    },
  ],
  defaultExample: {
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
              'Standard toggle switch for enabling or disabling merchant preferences. This example demonstrates a simple switch with a label, allowing merchants to toggle a single setting on or off.',
            codeblock: {
              title: 'Basic switch',
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
              'Locked switch with explanatory text for unavailable premium features. This example shows a switch that is visually disabled and cannot be interacted with, typically used to indicate a feature is not currently available.',
            codeblock: {
              title: 'Disabled switch',
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
              'Multiple switches within a form for notification preferences submission. This example illustrates how switches can be used together in a form to allow merchants to configure multiple related settings simultaneously.',
            codeblock: {
              title: 'Form integration',
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
              'Switch with visually hidden label that remains accessible to screen readers. This example demonstrates how to create a switch with a label that is only perceivable by assistive technologies, maintaining accessibility while minimizing visual clutter.',
            codeblock: {
              title: 'Hidden label for accessibility',
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
              'Required switch with validation error and contextual details for user guidance. This example shows a switch that requires user interaction, provides additional context through details, and displays an error message when validation fails.',
            codeblock: {
              title: 'With details and error',
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
              'Switch with enhanced accessibility description for screen reader users. This example illustrates how to provide a more descriptive accessibility label that provides additional context beyond the visible label.',
            codeblock: {
              title: 'Switch with accessibility label',
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
              'Group of related switches arranged in a vertical stack for settings configuration. This example demonstrates how to use the Stack component to create a clean, organized layout for multiple related switch settings.',
            codeblock: {
              title: 'Settings panel with Stack',
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
    ],
  },
};

export default data;
