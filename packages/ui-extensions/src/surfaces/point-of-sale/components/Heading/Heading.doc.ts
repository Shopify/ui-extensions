import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    'The heading component renders hierarchical titles to communicate the structure and organization of page content and help users navigate complex interfaces.' +
    '\n\nHeading levels adjust automatically based on nesting within parent [section](/docs/api/pos-ui-extensions/{API_VERSION}/web-components/layout-and-structure/section) components, ensuring a meaningful page outline.',
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the heading component.',
      type: 'Heading',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'heading-default.png',
    description:
      'Create hierarchical titles using a heading component that adjusts levels automatically based on nesting. This example shows a basic heading with automatic level management.',
    codeblock: {
      title: 'Display hierarchical headings',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Create logical hierarchy:** Start with higher-level headings for main sections, nested headings for subsections. Nested sections automatically adjust heading levels.
- **Write specific headings:** Avoid generic terms like "Details." Use specific descriptions like "Customer Contact Information" or "Transaction Summary."
- **Keep text concise:** Headings don't truncate, so keep them brief enough to display across different screen sizes.
`,
    },
  ],
  related: [],
};

export default data;
