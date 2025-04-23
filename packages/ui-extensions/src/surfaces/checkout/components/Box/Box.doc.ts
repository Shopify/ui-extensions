import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The `s-box` component is an escape hatch for building custom user interfaces. You should only use `s-box` when you cannot build what you need with the existing components.',
  isVisualComponent: true,
  thumbnail: 'box-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'BoxProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-box.example.html',
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
        "- Use Box when you need a container that preserves the natural size of its contents.\n\n- Box is particularly useful in layout components like Stack where you want to prevent children from stretching to fit.\n\n- Box has a `display: block` layout by default.\n\n- Use Box for simple container needs where you don't need the additional features of more specialized components like Stack.\n\n- Consider using Box when you need to apply specific styling or layout properties to a group of elements without affecting their natural dimensions.",
    },
    {
      type: 'Generic',
      anchorLink: 'accessibility',
      title: 'Accessibility',
      sectionContent:
        'The Box component supports various accessibility roles through the `accessibilityRole` prop:\n\n| Role | Description |\n| --- | --- |\n| <code>"main"</code> | Main content area of the page |\n| <code>"header"</code> | Page or section header |\n| <code>"footer"</code> | Page or section footer |\n| <code>"section"</code> | Generic section of content |\n| <code>"aside"</code> | Complementary content |\n| <code>"navigation"</code> | Navigation menu |\n| <code>"ordered-list"</code> | Numbered list |\n| <code>"list-item"</code> | Individual list item |\n| <code>"list-item-separator"</code> | Separator between list items |\n| <code>"unordered-list"</code> | Bulleted list |\n| <code>"separator"</code> | Visual separator |\n| <code>"status"</code> | Status message |\n| <code>"alert"</code> | Alert message |\n| <code>"generic"</code> | Generic container |\n| <code>"presentation"</code> | Decorative element |\n| <code>"none"</code> | No semantic meaning |',
    },
  ],
  related: [],
};

export default data;
