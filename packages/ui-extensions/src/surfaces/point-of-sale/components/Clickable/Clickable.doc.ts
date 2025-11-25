import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Clickable',
  description:
    'The `Clickable` component makes any content interactive to user interactions. Use it to add click interactions to non-interactive elements while maintaining full control over their visual presentation.' +
    "\n\nThis component provides a flexible way to wrap any content and make it respond to user interactions. Unlike buttons, it doesn't impose visual styling, allowing you to create custom interactive elements that match your design requirements while ensuring proper event handling.",
  thumbnail: 'clickable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Clickable` component.',
      type: 'Clickable',
    },
    {
      title: 'Events',
      description:
        'The `Clickable` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ClickableEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'clickable-default.png',
    description:
      'Make any content interactive using a `Clickable` component wrapper without imposing visual styling. This example shows how to create custom interactive elements while maintaining full control over appearance.',
    codeblock: {
      title: 'Make content clickable',
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
- **Implement visual feedback:** Since \`Clickable\` has no built-in styling, add focus indicators and active states to show interactivity.
- **Wrap non-interactive elements:** Use \`Clickable\` for text, images, or icons. Avoid wrapping components with built-in interactions.
- **Handle disabled state carefully:** When \`disabled\`, child elements can still receive focus. Provide visual feedback for the non-interactive state.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`Clickable\` components don't provide built-in visual styling. While the component provides built-in \`onClick\` feedback, you must implement focus indicators and other visual cues yourself.
- When disabled, child elements can still receive focus and be interacted with, which may create unexpected user experiences if not handled properly.
- Complex nested interactive elements within clickables may cause event propagation conflicts.
- The component doesn't automatically provide keyboard navigation support beyond basic click functionality.
`,
    },
  ],
  related: [],
};

export default data;
