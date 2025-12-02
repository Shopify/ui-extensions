import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    'The `Stack` component organizes elements horizontally or vertically along the block or inline axis. Use it to structure layouts, group related components, or control spacing between elements with flexible alignment options.' +
    '\n\nThe component simplifies layout creation by automatically managing spacing between child elements through gap properties, eliminating the need for manual margin management. It supports both horizontal and vertical arrangements, flexible alignment options, and wrapping behavior, making it the foundation for building consistent, responsive layouts throughout POS extensions.' +
    '\n\nThe spacing of `Stack` components\' gap values automatically adjust based on screen size. This ensures layouts remain visually balanced and maintain proper element separation across different devices.' +
    '\n\nComplex grid-like layouts may require multiple nested \`Stack\` components or alternative layout approaches for optimal results.',
  thumbnail: 'stack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Stack` component.',
      type: 'Stack',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'stack-default.png',
    description:
      'Organize elements horizontally or vertically using a `Stack` component with automatic spacing. This example shows a basic stack with gap spacing between child elements.',
    codeblock: {
      title: 'Organize elements with a stack',
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
- **Choose appropriate direction:** Use \`block\` for vertical arrangements like forms. Use \`inline\` for horizontal arrangements like button groups. Note that inline wraps while block doesn't.
- **Use design system spacing:** Use \`SpacingKeyword\` values for consistency. Start with \`base\` and adjust as needed.
- **Apply alignment properties:** Use \`justifyContent\` for main axis distribution, \`alignItems\` for cross axis positioning, \`alignContent\` for extra space distribution.
- **Avoid percentages on mobile:** Don't use percentage-based sizing within scrollable containers on mobile surfaces.
- **Use gap for spacing control:** Use \`gap\` for uniform spacing, \`rowGap\` for block axis, \`columnGap\` for inline axis.
`,
    },
    
  ],
  related: [],
};

export default data;
