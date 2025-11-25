import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    'The `Section` component groups related content into clearly-defined thematic areas. Sections have contextual heading levels to maintain a meaningful page structure.' +
    '\n\nUse sections to organize content logically and provide clear navigation landmarks. The component manages heading levels to ensure nested sections maintain proper semantic structure.',
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Section` component.',
      type: 'Section',
    },
    {
      title: 'Slots',
      description:
        'The `Section` component supports slots for additional content placement within the section. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'SectionSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'section-default.png',
    description:
      'Group related content using a `Section` component with automatic heading level management. This example shows a basic section with a heading and content area.',
    codeblock: {
      title: 'Group related content into sections',
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
- **Write descriptive headings:** Provide clear heading text that represents the section's content.
- **Let heading levels adjust automatically:** Nested sections automatically adjust heading levels for proper semantic structure.
- **Place relevant secondary actions:** Use the secondary-actions slot for actions that apply to the entire section, like "Edit Settings" or "Add Item."
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Section heading levels are automatically determined by nesting depth—manual heading level control is not available to ensure consistent document structure.
- Only one secondary action button is supported per section to maintain clean, focused interfaces that don't overwhelm users.
- The component's visual styling and spacing are controlled by the POS design system—custom section styling beyond content organization is not supported.
`,
    },
  ],
  related: [],
};

export default data;
