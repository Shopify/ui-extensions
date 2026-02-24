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
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'blockstack-default.png',
    description:
      'Stack a sync status label, two detail lines, and an action button in a vertical column with consistent spacing. This example uses `BlockStack` with the `gap` prop to control the vertical rhythm, and includes a secondary [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) for viewing the sync log.',
    codeblock: {
      title: 'Stack extension content vertically',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/BlockStack/examples/basic-blockstack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-blockstack.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Center a status display within the extension using `inlineAlignment="center"` on the `BlockStack`. This example centers an [InlineStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/inlinestack) of [Badge](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/badge) indicators, creating a focused status row.',
        codeblock: {
          title: 'Center-align block content',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/BlockStack/examples/blockstack-alignment.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/blockstack-alignment.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Separate compliance sections with spacing and a divider inside a block layout. This example applies `padding` and `paddingBlock` on nested `BlockStack` components, separated by a [Divider](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/divider).',
        codeblock: {
          title: 'Add padding between sections',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/BlockStack/examples/blockstack-padding.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/blockstack-padding.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Combine with InlineStack for complex layouts:** Use BlockStack for vertical arrangement and nest [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack) components inside it for horizontal rows, creating grid-like layouts.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- BlockStack doesn't support wrapping. All children are placed in a single column.
- BlockStack doesn't render any visible background, border, or shadow. It is purely a layout container. For visual styling, wrap it in a [Box](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/box) or [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section).`,
    },
  ],
  related: [],
};

export default data;
