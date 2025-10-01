import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Heading';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/heading.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Creating titles and subtitles for your content that are consistent across your app.
- Helping users with visual impairments navigate through content effectively using assistive technologies like screen readers.`,
    },
    {
      title: 'Considerations',
      type: 'Generic' as const,
      anchorLink: 'considerations',
      sectionContent: `- The level of the heading is automatically determined by how deeply it's nested inside other components, starting from h2.
- Default to using the \`heading\` property in \`s-section\`. The \`s-heading\` component should only be used if you need to implement a custom layout for your heading in the UI.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use short headings to make your content scannable.
- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Heading',
    },
    {
      title: 'Slots',
      description: '',
      type: 'HeadingSlots',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Standard heading for section titles and page content organization that creates a simple, clean title for a content section.',
            codeblock: {
              title: 'Basic heading',
              tabs: [
                {
                  code: './examples/basic-heading.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Truncated heading that limits text to a specified number of lines, using ellipsis to indicate additional content for long product names or constrained layouts.',
            codeblock: {
              title: 'Heading with line clamping',
              tabs: [
                {
                  code: './examples/heading-with-line-clamping.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Heading configured with custom ARIA roles and visibility settings to meet specific accessibility requirements or design constraints.',
            codeblock: {
              title: 'Heading with custom accessibility',
              tabs: [
                {
                  code: './examples/heading-with-custom-accessibility.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates nested heading structure that automatically adjusts heading levels (h2, h3, h4) based on the current section depth, ensuring proper semantic document structure.',
            codeblock: {
              title: 'Heading within section hierarchy',
              tabs: [
                {
                  code: './examples/heading-within-section-hierarchy.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
