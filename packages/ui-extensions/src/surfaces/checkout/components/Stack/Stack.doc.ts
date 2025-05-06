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
    {
      type: 'Generic',
      anchorLink: 'accessibility',
      title: 'Accessibility',
      sectionContent:
        'The Stack component supports various accessibility roles through the `accessibilityRole` prop:\n\n| Role | Description |\n| --- | --- |\n| <code>"main"</code> | Main content area of the page |\n| <code>"header"</code> | Page or section header |\n| <code>"footer"</code> | Page or section footer |\n| <code>"section"</code> | Generic section of content |\n| <code>"aside"</code> | Complementary content |\n| <code>"navigation"</code> | Navigation menu |\n| <code>"ordered-list"</code> | Numbered list |\n| <code>"list-item"</code> | Individual list item |\n| <code>"list-item-separator"</code> | Separator between list items |\n| <code>"unordered-list"</code> | Bulleted list |\n| <code>"separator"</code> | Visual separator |\n| <code>"status"</code> | Status message |\n| <code>"alert"</code> | Alert message |\n| <code>"generic"</code> | Generic container |\n| <code>"presentation"</code> | Decorative element |\n| <code>"none"</code> | No semantic meaning |',
    },
  ],
  related: [],
};

export default data;
