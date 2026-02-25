import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'HeadingGroup',
  description:
    "The HeadingGroup component controls the heading level hierarchy for any [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) components nested inside it. Use HeadingGroup to build a correct document outline without manually tracking heading levels. Each layer of nesting automatically increments the level by one (h1 becomes h2, h2 becomes h3, and so on).\n\nHeadingGroup doesn't accept any props and doesn't render visible UI. It's a purely structural wrapper. For a visible content grouping that also increments heading levels, use [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) instead.",
  requires: '',
  thumbnail: 'headinggroup-thumbnail.png',
  isVisualComponent: true,
  type: '',
  category: 'UI components',
  subCategory: 'Typography and content',
  defaultExample: {
    image: 'headinggroup-default.png',
    description:
      'Create a two-level title hierarchy for accessible screen reader navigation. This example uses `HeadingGroup` to nest a subsection under a parent [Heading](/docs/api/admin-extensions/{API_VERSION}/components/typography-and-content/heading), so screen readers announce the correct levels.',
    codeblock: {
      title: 'Group related heading content',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/HeadingGroup/examples/basic-headinggroup.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-headinggroup.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use HeadingGroup to build document structure:** Nest HeadingGroup components to create a logical heading hierarchy rather than manually setting heading sizes. This ensures assistive technologies can navigate the content correctly.
- **Choose HeadingGroup or Section per nesting layer:** Both HeadingGroup and [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) increment the heading level, so use one or the other at each layer to avoid double-incrementing. Use Section when you want a visible content grouping, and HeadingGroup when you only need to adjust the heading hierarchy.
- **Keep nesting shallow:** Avoid deeply nesting HeadingGroup components beyond three or four levels. Deeply nested headings (h5, h6) are rarely useful and can signal that the content structure needs simplification.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) levels stop incrementing at h6. Nesting HeadingGroup components beyond six levels will still render h6 headings.
- [Section](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/section) also increments the heading level, so you typically choose one or the other for a given nesting layer—using both together will increment the level twice.`,
    },
  ],
  related: [],
};

export default data;
