import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The `Box` component is a foundational layout primitive that controls padding, sizing, and visibility of its children. Use `Box` to add spacing around content, constrain dimensions, or toggle visibility without introducing stacking or alignment behavior.\n\nFor arranging multiple children in a vertical or horizontal flow, use [`BlockStack`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [`InlineStack`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack). For semantic grouping with a heading, use [`Section`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section).',
  requires: '',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the `Box` component.',
      type: 'BoxProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Use Box to build your layout',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Box/examples/basic-Box.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Box.example.ts',
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
      sectionContent: `- **Use \`Box\` for padding and sizing control:** \`Box\` is most useful when you need to add padding around content or control the block and inline size of a container without the stacking behavior of [\`BlockStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [\`InlineStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack).
- **Prefer \`BlockStack\` and \`InlineStack\` for stacking:** If you are arranging multiple children vertically or horizontally, use [\`BlockStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [\`InlineStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack) instead of \`Box\`. Those components provide gap control and alignment that \`Box\` doesn't.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- \`Box\` doesn't support gap or spacing between children. To add spacing between child elements, use [\`BlockStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [\`InlineStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack) instead.
- \`Box\` doesn't render any visible background, border, or shadow. It's a transparent layout wrapper. There is no built-in way to create card-like visual containers with \`Box\` alone.
- \`Box\` doesn't support flex direction, wrapping, or alignment props. It's not a flex container. For flex-like layouts, use [\`BlockStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [\`InlineStack\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack).`,
    },
  ],
  related: [],
};

export default data;
