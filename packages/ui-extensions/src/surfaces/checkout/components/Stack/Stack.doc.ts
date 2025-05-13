import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    "`s-stack` structures layout elements along the [block or inline axes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) of the page. It is useful for organizing buttons, creating layouts that adjust to screen size, and controlling spacing between elements.\n\nIt's important to note that Stack does not include any padding by default. If you need padding around your stacked elements, use `base` to apply the default padding. When spacing becomes limited, Stack will always wrap children to a new line.\n\nWhen using `s-stack`, use smaller gaps between small elements and larger gaps between big ones. Maintain a consistent spacing in stacks across all pages of your app.",
  isVisualComponent: true,
  thumbnail: 'stack-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'StackProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'stack-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-stack.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Use Stack when you need to arrange elements vertically or horizontally with consistent spacing.\n\n- Stack is particularly useful for forms, lists, and any content that needs to flow vertically or horizontally.\n\n- Consider using Stack when you need to maintain consistent rhythm between elements in a single direction.',
    },
  ],
  related: [],
};

export default data;
