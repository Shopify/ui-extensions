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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Ensure sufficient hit area:** Provide enough space around clickable elements for easy tap targets, especially on touch devices.\n' +
        '- **Use for custom interactive elements:** Reserve `Clickable` for scenarios where `Button` styling isn\'t appropriate.\n' +
        '- **Provide visual feedback:** Ensure wrapped content shows clear visual feedback on interaction through styling or state changes.\n' +
        '- **Use command system when appropriate:** Use `commandFor` and `command` to control modals and overlays declaratively rather than through manual state management.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- `Clickable` doesn\'t provide built-in visual styling—you must design and implement all visual feedback and states for wrapped content.\n' +
        '- The component doesn\'t automatically handle keyboard navigation for complex interactive patterns—implement additional keyboard handlers if needed.\n' +
        '- Nested clickable elements can create confusing interactions—avoid placing clickable content inside other clickable containers.',
    },
  ],
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
  related: [],
};

export default data;
