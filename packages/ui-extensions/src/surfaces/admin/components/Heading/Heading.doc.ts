import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    "The Heading component renders a title for sections of content. Use Heading to label groups of related information and create a scannable visual hierarchy within your extension.\n\nThe rendered heading level (h1\u2013h6) is automatically determined by how deeply the Heading is nested within [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) components, so you don't need to manage levels manually. For body text and inline content, use [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) or [Paragraph](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/paragraph).",
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
    codeblock: {
      title: 'Simple Heading example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Heading/examples/basic-heading.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-heading.example.ts',
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
      sectionContent: `- **Let the heading level be determined automatically:** Wrap Heading components in [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) components to produce a logical heading hierarchy. Avoid manually setting \`size\` to simulate heading levels.
- **Use one primary heading per group:** Each [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) should typically contain one Heading that describes its content. Multiple headings at the same level within a single group can confuse screen reader users.
- **Keep headings concise:** Write headings that clearly and briefly describe the section content. Merchants scan headings to find relevant sections, so short, descriptive titles work best.
- **Don't skip heading levels:** Use nested [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) components to create a natural hierarchy (h1 \u2192 h2 \u2192 h3). Skipping levels (h1 \u2192 h3) makes the document outline confusing for assistive technologies.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The \`size\` prop controls the visual size of the heading but not the semantic level. The rendered heading level (h1\u2013h6) is determined by the nesting depth of parent [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) components. This means a visually large heading may render as an h3 if nested inside two [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) components.
- The maximum heading level is h6. Further nesting beyond six levels of [HeadingGroup](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/headinggroup) components will still render as h6.
- Heading doesn't support font weight, color, or alignment props. It always renders with the default heading style for its level. For inline text with custom typographic styling, use the [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) component.`,
    },
  ],
  related: [],
};

export default data;
