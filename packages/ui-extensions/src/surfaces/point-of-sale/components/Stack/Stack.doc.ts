import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    'The `Stack` component organizes elements horizontally or vertically along the block or inline axis. Use it to structure layouts, group related components, or control spacing between elements with flexible alignment options.' +
    '\n\nThe component simplifies layout creation by automatically managing spacing between child elements through gap properties, eliminating the need for manual margin management. It supports both horizontal and vertical arrangements, flexible alignment options, and wrapping behavior, making it the foundation for building consistent, responsive layouts throughout POS extensions.' +
    '\n\n`Stack` components support responsive gap values that automatically adjust spacing based on screen size, ensuring layouts remain visually balanced and maintain proper element separation across different devices.',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Choose appropriate direction:** Use `block` for vertical arrangements like forms. Use `inline` for horizontal arrangements like button groups. Note that inline wraps while block doesn\'t.\n' +
        '- **Use design system spacing:** Use `SpacingKeyword` values for consistency. Start with `base` and adjust as needed.\n' +
        '- **Apply alignment properties:** Use `justifyContent` for main axis distribution, `alignItems` for cross axis positioning, `alignContent` for extra space distribution.\n' +
        '- **Avoid percentages on mobile:** Don\'t use percentage-based sizing within scrollable containers on mobile surfaces.\n' +
        '- **Use gap for spacing control:** Use `gap` for uniform spacing, `rowGap` for block axis, `columnGap` for inline axis.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Wrapping behavior is determined by direction—inline stacks wrap content while block stacks don\'t, which may not suit all layout requirements.\n' +
        '- Percentage-based sizing should be avoided on mobile surfaces within scrollable containers due to unexpected behavior.\n' +
        '- Complex grid-like layouts may require multiple nested `Stack` components or alternative layout approaches for optimal results.',
    },
  ],
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
  related: [],
};

export default data;
