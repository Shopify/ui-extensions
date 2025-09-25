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
      type: 'SectionPropsDocs',
    },
    {
      title: 'Slots',
      description: '',
      type: 'SectionElementSlotsDocs',
    },
  ],
  defaultExample: {
    image: 'section-default.png',
    altText:
      'An example of the Section component shows a header, some text, a primary action, and a secondary action.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-Section.example.html',
          language: 'jsx',
        },
      ],
    },
  },
};

export default data;
