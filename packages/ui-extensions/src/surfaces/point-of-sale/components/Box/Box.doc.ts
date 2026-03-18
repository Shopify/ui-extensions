import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The box component provides a container for layout and visual styling. Use it to apply padding, borders, and background colors, or to nest and group other components.' +
    '\n\nFor user interaction, use box in combination with interactive components like [button](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/button) or [clickable](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/actions/clickable). For scrollable content, use [scroll box](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/layout-and-structure/scroll-box).',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the box component.',
      type: 'Box',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'box-default.png',
    description:
      'Create layouts using a box component. This example demonstrates a basic box container with padding and styling.',
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
