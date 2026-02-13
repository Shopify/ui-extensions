import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'BlockStack',
  description:
    'The BlockStack component arranges its children vertically (along the block axis) with configurable spacing between them. Use it to stack elements like headings, paragraphs, form fields, and buttons in a column layout.\n\nFor horizontal arrangement, use [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack).',
  requires: '',
  thumbnail: 'blockstack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the BlockStack component.',
      type: 'BlockStackProps',
    },
  ],
  related: [],
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'blockstack-default.png',
    codeblock: {
      title: 'Laying out elements in a column',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/BlockStack/examples/basic-BlockStack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-BlockStack.example.ts',
          language: 'js',
        },
      ],
    },
  },

  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use BlockStack as your default layout container:** Most UI elements in admin extensions stack vertically. Wrap related elements in a BlockStack for uniform spacing.
- **Combine with InlineStack for complex layouts:** Use BlockStack for vertical arrangement and nest [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack) components inside it for horizontal rows, creating grid-like layouts.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- BlockStack doesn't support wrapping. All children are placed in a single column. For wrapping layouts, use [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack) which wraps children to the next line when the container is full.
- BlockStack doesn't render any visible background, border, or shadow. It is purely a layout container. For visual styling, wrap it in a [Box](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/box) or [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section).`,
    },
  ],
};

export default data;
