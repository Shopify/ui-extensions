import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    "The Heading component renders a title for sections of content. Use Heading to label groups of related information and create a scannable visual hierarchy within your extension.\n\nThe rendered heading level (h1\u2013h6) is automatically determined by how deeply the Heading is nested within [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) or [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) components, so you don't need to manage levels manually. For body text and inline content, use [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) or [Paragraph](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/paragraph).",
  requires: '',
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Heading component.',
      type: 'HeadingProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Typography and content',
  defaultExample: {
    image: 'heading-default.png',
    description:
      'Add a title and description to a product analytics block. This example renders a `Heading` above descriptive [Text](/docs/api/admin-extensions/{API_VERSION}/components/typography-and-content/text) inside a [BlockStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/blockstack).',
    codeblock: {
      title: 'Label extension sections',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Heading/examples/basic-heading.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-heading.example.ts',
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
          "Control heading size using the `size` prop to create visual hierarchy. This example renders a size-2 heading for the extension title and a size-3 sub-heading for a detail section, mirroring the Shopify admin's native content structure.",
        codeblock: {
          title: 'Create hierarchical content sections',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Heading/examples/heading-sizes.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/heading-sizes.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Create accessible section labels using the `id` prop inside a [Section](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/section) component. This example nests a heading within a section to maintain proper document outline so screen readers announce the section context correctly.',
        codeblock: {
          title: 'Build accessible section labels',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Heading/examples/heading-accessible.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/heading-accessible.example.ts',
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
      sectionContent: `- **Let the heading level be determined automatically:** Wrap Heading components in [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) or [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) components to produce a logical heading hierarchy. Avoid manually setting \`size\` to simulate heading levels.
- **Use one primary heading per section:** Each [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) or [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) should typically contain one Heading that describes its content. Multiple headings at the same level within a single section can confuse screen reader users.
- **Keep headings concise:** Write headings that clearly and briefly describe the section content. Merchants scan headings to find relevant sections, so short, descriptive titles work best.
- **Don't skip heading levels:** Use nested [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) or [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) components to create a natural hierarchy (h1 \u2192 h2 \u2192 h3). Skipping levels (h1 \u2192 h3) makes the document outline confusing for assistive technologies.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The \`size\` prop controls the visual size of the heading but not the semantic level. The rendered heading level (h1\u2013h6) is determined by the nesting depth of parent [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) and [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) components. This means a visually large heading might render as an h3 if nested inside two [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) components.
- The maximum heading level is h6. Further nesting beyond six levels of [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) or [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) components will still render as h6.
- Heading doesn't support font weight, color, or alignment props. It always renders with the default heading style for its level. For inline text with custom typographic styling, use the [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) component.`,
    },
  ],
  related: [],
};

export default data;
