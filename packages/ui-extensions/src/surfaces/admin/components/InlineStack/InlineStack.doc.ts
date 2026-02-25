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
    description:
      'Arrange metadata labels, values, and badges in a horizontal row. This example uses `InlineStack` with the `gap` prop to space product IDs, SKUs, weights, and a status [Badge](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/badge) side by side.',
    codeblock: {
      title: 'Arrange metadata in rows',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/InlineStack/examples/basic-inlinestack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-inlinestack.example.ts',
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
          'Right-align action buttons using `inlineAlignment="end"`. This example positions cancel and confirm [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) components at the trailing edge of an [action modal](/docs/api/admin-extensions/{API_VERSION}/components/settings-and-templates/adminaction), following standard dialog patterns.',
        codeblock: {
          title: 'Right-align action buttons',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/InlineStack/examples/inlinestack-alignment.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/inlinestack-alignment.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Vertically center [Icon](/docs/api/admin-extensions/{API_VERSION}/components/media-and-visuals/icon) and text pairs using `blockAlignment="center"`. This example places order and inventory icons inline with their stat labels, so they stay aligned regardless of icon and text height differences.',
        codeblock: {
          title: 'Center-align icon and text pairs',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/InlineStack/examples/inlinestack-spacing.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/inlinestack-spacing.example.ts',
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
      sectionContent: `- **Use for horizontal grouping:** InlineStack is ideal for placing buttons, badges, icons, or other small elements in a row. For vertical stacking, use [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) instead.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- InlineStack doesn't support explicit column counts or grid-like layouts. For more complex grid arrangements, nest [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) and InlineStack components together.
- InlineStack doesn't render any visible background, border, or shadow. It's purely a layout container. For visual containment, wrap it in a [Box](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/box) or [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section).
- Children that are wider than the container will overflow. InlineStack doesn't automatically resize children to fit.`,
    },
  ],
  related: [],
};

export default data;
