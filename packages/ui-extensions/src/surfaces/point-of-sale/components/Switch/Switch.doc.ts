import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Switch',
  description:
    'The `Switch` component provides a clear way to toggle options on or off. Use it to enable or disable features, settings, or preferences within the POS interface.' +
    '\n\nSwitches are best suited for immediate action toggles that don\'t require form submission, such as enabling notifications or turning on special features. For selections that are part of a form submission, consider using [`ChoiceList`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/choicelist) instead.',
  thumbnail: 'switch-thumbnail.png',
  isVisualComponent: true,
  type: '',
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
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'switch-default.png',
    description:
      'Toggle options on or off using a `Switch` component. This example shows a basic switch with a label.',
    codeblock: {
      title: 'Toggle options with a switch',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use for immediate actions:** Switches are ideal for settings that take effect immediately without requiring form submission, such as enabling or disabling a feature.
- **Write clear labels:** Use descriptive labels that clearly explain what the switch controls, like "Enable notifications" or "Show customer details."
- **Provide context when needed:** Use the \`details\` property to add helpful information about what the switch controls, especially for settings that might have significant impact.
- **Show validation feedback:** Use the \`error\` property to display validation messages when a switch state is invalid or conflicts with other settings.
- **Consider state feedback:** The switch automatically shows its on/off state through visual styling, making it clear to merchants what state is active.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The \`Switch\` component is designed for binary on/off states only. For selections with more than two options, use [\`ChoiceList\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/choicelist) or [\`SegmentedControl\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/forms/segmentedcontrol) instead.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to configure switch properties, handle state changes, and provide validation feedback.',
    examples: [
      {
        description:
          'Handle switch state changes using the `onChange` and `onInput` events to respond when merchants toggle the switch. This example demonstrates how to capture state changes in real time, enabling dynamic behavior and immediate feedback based on the switch state.',
        codeblock: {
          title: 'Handle switch events',
          tabs: [
            {
              code: './examples/event-handling.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Configure common `Switch` properties including `details` for helper text and `error` for validation feedback. This example shows how to provide context and validation messages to guide merchants when using switches for important settings.',
        codeblock: {
          title: 'Configure validation and guidance',
          tabs: [
            {
              code: './examples/common-props.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;

