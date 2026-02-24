import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    'The Section component creates a visual and semantic grouping for related content, with an optional heading and adjustable padding. Use Section to organize your extension into distinct content areas that merchants can scan and understand at a glance.\n\nSection automatically increments the heading level for any [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) components nested inside it, ensuring a correct document outline. Nest Section components to create deeper heading hierarchies without manually managing levels.',
  requires: '',
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Section component.',
      type: 'SectionProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'section-default.png',
    description:
      'Group warehouse location details under a labeled heading. This example uses `Section` with a `heading` prop to bundle a warehouse name, storage slot, and stock count into one content area.',
    codeblock: {
      title: 'Group content with a heading',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Section/examples/basic-Section.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-Section.example.ts',
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
          'Nest sections to create multi-level content grouping with automatic heading level adjustment. This example places a "Safety certifications" section inside a "Product compliance" parent section, with heading levels adapting to reflect the hierarchy.',
        codeblock: {
          title: 'Nest sections for content hierarchy',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Section/examples/section-nested.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/section-nested.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Provide screen readers with a more descriptive section context than the visible heading alone using `accessibilityLabel`. This example labels a shipping configuration section with form fields, so assistive technology announces the full purpose of the form group.',
        codeblock: {
          title: 'Add accessible section descriptions',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Section/examples/section-accessible.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/section-accessible.example.ts',
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
      sectionContent: `- **Use Section to group related content:** Wrap related fields, text, or actions in a Section with a descriptive heading to create clear visual and semantic groupings.
- **Provide an accessibility label when there is no heading:** If the section doesn't have a visible heading, provide an accessibility label so screen reader users understand what the section contains.
- **Nest Section components for deeper structure:** Each nested Section increments the heading level. This creates a natural document outline (h1 \u2192 h2 \u2192 h3) without manually managing heading levels.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Section's visual appearance is controlled by Shopify and can't be customized. It might render differently in different component contexts ([AdminBlock](/docs/api/admin-extensions/{API_VERSION}/ui-components/settings-and-templates/adminblock) versus [AdminAction](/docs/api/admin-extensions/{API_VERSION}/ui-components/settings-and-templates/adminaction)).
- The heading level auto-increment stops at h6. Nesting sections beyond six levels deep will still render h6 headings.`,
    },
  ],
  related: [],
};

export default data;
