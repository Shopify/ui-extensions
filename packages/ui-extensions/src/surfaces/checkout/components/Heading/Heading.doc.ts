import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Heading';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'heading-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'HeadingProps',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-heading.example.html',
          language: 'html',
        },
      ],
    },
  },
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
      sectionContent: `
- Use short headings to make your content scannable.
- Use plain and clear terms.
- Don't use jargon or technical language.
- Don't use different terms to describe the same thing.
- Don't duplicate content.`,
    },
  ],
};

export default data;
