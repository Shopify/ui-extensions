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
        'The switch component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-web-components#handling-events).',
      type: 'SwitchEvents',
    },
  ],
  defaultExample: {
    description:
      'Give users a clear way to turn a feature on or off. This example pairs a label with a toggle switch.',
    codeblock: {
      title: 'Toggle a setting',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
              "Indicate when a feature isn't available. This example locks a switch to prevent interaction while displaying its current state.",
            codeblock: {
              title: 'Show a disabled switch',
              tabs: [
                {
                  code: './examples/disabled-switch.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Collect multiple settings that save together. This example groups switches in a form for batch submission.',
            codeblock: {
              title: 'Submit multiple settings in a form',
              tabs: [
                {
                  code: './examples/form-integration.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Organize settings in a panel layout. This example arranges switches in a stack to display related preferences together.',
            codeblock: {
              title: 'Apply multiple settings immediately',
              tabs: [
                {
                  code: './examples/settings-panel-with-stack.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              "Keep switches accessible when labels aren't visually needed. This example uses a visually hidden label that screen readers can still announce.",
            codeblock: {
              title: 'Hide the label visually',
              tabs: [
                {
                  code: './examples/hidden-label-for-accessibility.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              "Communicate switch-related problems clearly. This example displays helper text with an error message when a required switch isn't enabled.",
            codeblock: {
              title: 'Show validation errors',
              tabs: [
                {
                  code: './examples/with-details-and-error.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Provide extra context for screen reader users. This example adds an accessibility label that gives more detail than the visible label alone.',
            codeblock: {
              title: 'Add an accessibility label',
              tabs: [
                {
                  code: './examples/switch-with-accessibility-label.html',
                  language: 'preview',
                  title: '',
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
