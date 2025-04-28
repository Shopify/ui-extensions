import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    "The `s-heading` component renders hierarchical titles similar to HTML's `h1-h6` elements. Heading levels are automatically determined by parent `s-section` nesting depth starting from h2. Always prefer using the `heading` property on `s-section` and `s-banner` components before constructing custom layout with `s-heading`.",
  thumbnail: 'heading-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'HeadingProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-heading.example.html',
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
        '- Add a heading at the top of each section that clearly describe what’s below.\n\n- Use the heading to highlight the most important concepts or pieces of information that customers need to know.',
    },
  ],
  related: [
    {
      name: 'Text',
      subtitle: 'Component',
      url: 'text',
      type: 'Component',
    },
    {
      name: 'Paragraph',
      subtitle: 'Component',
      url: 'paragraph',
      type: 'Component',
    },
    {
      name: 'Section',
      subtitle: 'Component',
      url: 'section',
      type: 'Component',
    },
  ],
};

export default data;
