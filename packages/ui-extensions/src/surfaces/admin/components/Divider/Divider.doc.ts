import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Divider',
  description:
    'The Divider component renders a thin line to visually separate groups of content. It can be oriented horizontally (inline) or vertically (block), making it useful for separating items in both vertical stacks and horizontal rows.\n\nFor semantic grouping with a heading, use [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) instead.',
  requires: '',
  thumbnail: 'divider-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Divider component.',
      type: 'DividerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'divider-default.png',
    description:
      'Separate a sync status summary from a recent changes list with a horizontal rule. This example places a `Divider` between two sections, each with its own [Heading](/docs/api/admin-extensions/{API_VERSION}/components/typography-and-content/heading) and detail text.',
    codeblock: {
      title: 'Separate content sections',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Divider/examples/basic-divider.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-divider.example.ts',
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
          'Render a vertical divider between inline elements using `direction="block"`. This example separates a product price from its SKU inside an [InlineStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/inlinestack), creating a compact metadata row.',
        codeblock: {
          title: 'Add vertical inline dividers',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Divider/examples/divider-inline.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/divider-inline.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Break a multi-section form into visually distinct groups using dividers between [TextField](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) clusters. This example separates shipping details from customs information in an [action modal](/docs/api/admin-extensions/{API_VERSION}/components/settings-and-templates/adminaction), making it easier for merchants to find fields.',
        codeblock: {
          title: 'Divide form groups',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Divider/examples/divider-sections.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/divider-sections.example.ts',
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
      sectionContent: `- **Use dividers to separate distinct groups:** Place a Divider between logical groups of content to help merchants scan and distinguish between sections.
- **Don't overuse dividers:** Too many dividers can make the interface feel cluttered. Consider using spacing (using [BlockStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/blockstack) or [InlineStack](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/inlinestack)) instead of dividers when a subtle separation is sufficient.
- **Use Section for semantic separation:** If the content groups have headings or represent distinct sections, use [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) components instead of Divider. Divider is purely visual and doesn't convey semantic meaning.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Divider doesn't accept children. It renders as a self-contained line element.
- The visual style (color, thickness, style) of the divider is controlled by Shopify and can't be customized. It always renders as a standard admin divider line.
- Divider doesn't add any spacing around itself. Place it inside a layout container with appropriate spacing to control the gap between the divider and adjacent content.`,
    },
  ],
  related: [],
};

export default data;
