import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    "The `Box` component displays a generic container with consistent spacing and styling. Use it to apply padding, to nest and group other components, or as the foundation for building structured layouts. Box doesn't provide interactive functionality. For user interaction, use boxes in combination with interactive components like [\`Button\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/button) or [\`Clickable\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/clickable)." +
    "\n\nThe component provides granular control over spacing through padding properties and sizing through width/height properties, serving as a building block for precise layouts. It simplifies the creation of containers with consistent spacing by using design system tokens, ensuring visual consistency and reducing the need for custom CSS in most layout scenarios. To maintain consistency, `Box` only supports predefined design system scales. Custom pixel values for padding aren't supported." +
    '\n\n`Box` components provide shorthand properties for common padding patterns like equal padding on all sides or symmetric horizontal/vertical padding, reducing verbose property specifications for simpler layouts.' +
    "Note that `Box` doesn't provide scrolling capabilities for overflow content. When content exceeds the container dimensions, use [\`ScrollBox\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/layout-and-structure/scrollbox) instead.",
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
    
  ],
  related: [],
};

export default data;
