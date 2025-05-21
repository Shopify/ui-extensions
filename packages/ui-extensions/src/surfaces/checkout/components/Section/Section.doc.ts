import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Section';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic',
      anchorLink: 'useful-for',
      sectionContent: `- Organizing your page in a logical structure based on nesting levels.
- Creating consistency across pages.`,
    },
    {
      title: 'Considerations',
      type: 'Generic',
      anchorLink: 'considerations',
      sectionContent: `- When adding headings inside sections they automatically use a specific style, which helps keep the content organized and clear.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SectionProps',
    },
  ],
  defaultExample: {
    image: 'section-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-section.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
