import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'InlineStack',
  description:
    'The InlineStack component arranges its children horizontally (along the inline axis) with configurable spacing. Use it to place elements side by side, such as buttons in a row, badges next to text, or icon-label pairs.\n\nFor vertical arrangement, use [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack).',
  requires: '',
  thumbnail: 'inlinestack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the InlineStack component.',
      type: 'InlineStackProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'inlinestack-default.png',
    codeblock: {
      title: 'Laying out elements in a row',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/InlineStack/examples/basic-inlinestack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-inlinestack.example.ts',
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
      sectionContent: `- **Use for horizontal grouping:** InlineStack is ideal for placing buttons, badges, icons, or other small elements in a row. For vertical stacking, use [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) instead.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- InlineStack doesn't support explicit column counts or grid-like layouts. For more complex grid arrangements, nest [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) and InlineStack components together.
- InlineStack doesn't render any visible background, border, or shadow. It's purely a layout container.
- Children that are wider than the container will overflow. InlineStack doesn't automatically resize children to fit.`,
    },
  ],
  related: [],
};

export default data;
