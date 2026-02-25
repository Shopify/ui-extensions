import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Switch',
  description:
    'The switch component creates a toggle control that allows merchants to turn an option on or off. Use switches for settings that take effect immediately, such as enabling notifications or toggling features.' +
    "\n\nSwitches provide clear visual feedback about the current state and are ideal for binary choices that don't require confirmation.",
  thumbnail: 'switch-thumbnail.png',
  isVisualComponent: true,
  type: '',
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
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'switch-default.png',
    description: 'Toggle settings on or off using a switch component.',
    codeblock: {
      title: 'Create a toggle switch',
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
      anchorLink: 'accessibility',
      title: 'Accessibility',
      sectionContent: `
- **Provide descriptive labels:** Use the \`label\` prop to clearly describe what the switch controls.
- **Use accessibility labels when needed:** If the visual label doesn't provide enough context, use the \`accessibilityLabel\` prop to provide additional information for screen readers.
- **Indicate disabled state:** When a switch is disabled, ensure the reason is communicated to users through surrounding context or helper text.
`,
    },
  ],
  related: [],
  examples: {
    description: 'Learn how to handle switch change events.',
    examples: [
      {
        description:
          'Subscribe to the `onChange` event to respond when merchants toggle the switch. This example shows how to handle state changes and capture the checked value in real time, enabling dynamic behavior based on the switch state.',
        codeblock: {
          title: 'Handle switch change events',
          tabs: [
            {
              code: './examples/event-handling.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
