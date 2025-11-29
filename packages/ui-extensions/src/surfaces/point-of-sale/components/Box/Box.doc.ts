import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The `Box` component displays a generic container with consistent spacing and styling. Use it to apply padding, to nest and group other components, or as the foundation for building structured layouts.' +
    '\n\nThe component provides granular control over spacing through padding properties and sizing through width/height properties, serving as a building block for precise layouts. It simplifies the creation of containers with consistent spacing by using design system tokens, ensuring visual consistency and reducing the need for custom CSS in most layout scenarios.' +
    '\n\n`Box` components provide shorthand properties for common padding patterns like equal padding on all sides or symmetric horizontal/vertical padding, reducing verbose property specifications for simpler layouts.',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the `Box` component.',
      type: 'Box',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use semantic sizing:** Choose \`auto\` to adapt to content, percentages for responsive layouts, pixels only for exact dimensions.
- **Use design system padding:** Use predefined padding keywords (\`small\`, \`base\`, \`large\`) for consistency.
- **Use directional padding for asymmetry:** Use \`paddingInline\` and \`paddingBlock\` when different spacing is needed on different sides.
- **Understand block vs inline:** \`block\` refers to content flow direction (usually vertical), \`inline\` to text direction (usually horizontal).
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Box is a layout container and doesn't provide interactive functionality—use it in combination with interactive components like [\`Button\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/actions/button) or [\`Clickable\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/actions/clickable) for user interactions.
- Padding values are limited to the predefined design system scale—custom pixel values for padding aren't supported to maintain design consistency.
- Box doesn't provide scrolling capabilities for overflow content—use [\`ScrollBox\`](/docs/api/pos-ui-extensions/2025-10/polaris-web-components/layout-and-structure/scrollbox) when content might exceed container dimensions.
`,
    },
  ],
  defaultExample: {
    image: 'box-default.png',
    description:
      'Create flexible layouts using the `Box` component with configurable spacing, borders, and background colors. This example demonstrates a basic box container with padding and styling.',
    codeblock: {
      title: 'Create a container with a box',
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
