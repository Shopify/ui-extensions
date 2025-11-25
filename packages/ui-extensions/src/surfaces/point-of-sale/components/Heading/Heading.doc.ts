import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    'The `Heading` component renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful page outline.' +
    '\n\nUse headings to create clear information hierarchy and help users navigate complex interfaces efficiently.' +
    '\n\n`Heading` components provide consistent typographic scaling that maintains visual hierarchy while ensuring headings remain readable at all levels, even when deeply nested within multiple `Section` components.',
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Heading` component.',
      type: 'Heading',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Create logical hierarchy:** Start with higher-level headings for main sections, nested headings for subsections. Nested sections automatically adjust heading levels.\n' +
        '- **Write specific headings:** Avoid generic terms like "Details." Use specific descriptions like "Customer Contact Information" or "Transaction Summary."\n' +
        '- **Keep text concise:** Headings don\'t truncate, so keep them brief enough to display across different screen sizes.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Heading levels are automatically determined by nesting within `Section` components—manual heading level control is not available to ensure consistent document structure.\n' +
        '- The component doesn\'t support rich text formatting within the heading content—use plain text or simple inline elements for heading content.\n' +
        '- Visual styling is controlled by the POS design system and heading level—custom typography styles beyond the available properties aren\'t supported.',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
    description:
      'Create hierarchical titles using a `Heading` component that adjusts levels automatically based on nesting. This example shows a basic heading with automatic level management.',
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
  related: [],
};

export default data;
