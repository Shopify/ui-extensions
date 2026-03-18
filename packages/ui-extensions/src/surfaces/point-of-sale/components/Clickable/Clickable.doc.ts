import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Clickable',
  description:
    'The clickable component makes any content interactive. Use it to add click interactions to non-interactive elements while maintaining full control over their visual presentation.' +
    "\n\nUnlike the [button](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/button) component, clickable doesn't impose visual styling, allowing you to create custom interactive elements. You must implement focus indicators and other visual cues yourself.",
  thumbnail: 'clickable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the clickable component.',
      type: 'Clickable',
    },
    {
      title: 'Events',
      description:
        'The clickable component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ClickableEvents',
    },
  ],
  category: 'Web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'clickable-default.png',
    description:
      'Make any content interactive using a clickable component wrapper without imposing visual styling. This example shows how to create custom interactive elements while maintaining full control over appearance.',
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
- **Implement visual feedback:** Since clickable has no built-in styling, add focus indicators and active states to show interactivity.
- **Wrap non-interactive elements:** Use clickable for text, images, or icons. Avoid wrapping components with built-in interactions.
- **Handle disabled state carefully:** When \`disabled\`, child elements can still receive focus. Provide visual feedback for the non-interactive state.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The component doesn't automatically provide keyboard navigation support beyond basic click functionality.
`,
    },
  ],
  related: [],
};

export default data;
