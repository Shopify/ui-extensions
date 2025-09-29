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
              'Standard toggle switch for enabling or disabling merchant preferences. This example demonstrates a simple switch with a label, allowing users to toggle a single setting on or off.',
            codeblock: {
              title: 'Basic switch',
              tabs: [
                {
                  code: './examples/basic-switch.html',
                  language: 'preview',
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
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Multiple switches within a form for notification preferences submission. This example illustrates how switches can be used together in a form to allow users to configure multiple related settings simultaneously.',
            codeblock: {
              title: 'Form integration',
              tabs: [
                {
                  code: './examples/form-integration.html',
                  language: 'preview',
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
                  language: 'preview',
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
                  language: 'preview',
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
                  language: 'preview',
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
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Simple example of directly using the switch component in plain HTML, showing its basic implementation with a label and checked state.',
            codeblock: {
              title: 'Direct HTML usage',
              tabs: [
                {
                  code: './examples/direct-html-usage.html',
                  language: 'preview',
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
