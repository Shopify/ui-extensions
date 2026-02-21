import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The Box component is a foundational layout primitive that controls padding, sizing, and accessibility roles for its children. Use Box to add spacing around content, constrain dimensions, or assign semantic roles without introducing stacking or alignment behavior.\n\nFor arranging multiple children in a vertical or horizontal flow, use [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack).',
  requires: '',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Box component.',
      type: 'BoxProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Create a padded content container',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Box/examples/basic-box.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-box.example.ts',
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
          'Constrain an [Image](/docs/api/admin-extensions/{API_VERSION}/components/media-and-visuals/image) to a fixed size using `inlineSize` and `blockSize` props. This example creates a thumbnail container alongside product details in an [InlineStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/inlinestack), preventing the image from stretching beyond its bounds.',
        codeblock: {
          title: 'Constrain image dimensions',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Box/examples/box-sizing.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/box-sizing.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Assign semantic meaning to layout containers using `accessibilityRole`. This example wraps a compliance status message in a Box with `accessibilityRole="status"` and shipping details in a Box with `accessibilityRole="section"`, helping screen readers understand the structure of the content.',
        codeblock: {
          title: 'Add semantic roles to containers',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Box/examples/box-display.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/box-display.example.ts',
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
      sectionContent: `- **Use Box for padding and sizing control:** Box is most useful when you need to add padding around content or control the block and inline size of a container without the stacking behavior of [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack).
- **Prefer BlockStack and InlineStack for stacking:** If you are arranging multiple children vertically or horizontally, use [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack) instead of Box. Those components provide gap control and alignment that Box doesn't.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Box doesn't support gap or spacing between children. To add spacing between child elements, use [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack) instead.
- Box doesn't render any visible background, border, or shadow. It's a transparent layout wrapper. There is no built-in way to create card-like visual containers with Box alone.
- Box doesn't support flex direction, wrapping, or alignment props. It's not a flex container. For flex-like layouts, use [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack).`,
    },
  ],
  related: [],
};

export default data;
