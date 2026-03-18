import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    'The stack component organizes elements along the block (vertical) or inline (horizontal) axis. Use it to structure layouts and control spacing between elements.' +
    '\n\nThe component automatically manages spacing through gap properties and supports flexible alignment and wrapping behavior. Complex grid-like layouts may require multiple nested stack components or alternative layout approaches.',
  thumbnail: 'stack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the stack component.',
      type: 'Stack',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'stack-default.png',
    description:
      'Organize elements using a stack component. This example shows a basic stack with spacing between child elements.',
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
