import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Section';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/section.png',
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Organizing your page in a logical structure based on nesting levels.
- Creating consistency across pages.`,
    },
    {
      title: 'Considerations',
      type: 'Generic' as const,
      anchorLink: 'considerations',
      sectionContent: `- When adding headings inside sections they automatically use a specific style, which helps keep the content organized and clear.
- Built-in spacing is added between nested sections, as well as between heading and content.
- **Level 1:** Display as responsive cards with background color, rounded corners, and shadow effects. Includes outer padding that can be removed when content like \`s-table\` needs to expand to the full width of the section.
- **Nested sections:** Don't have any background color or effects by default.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Section',
    },
  ],
  defaultExample: {
    image: 'section-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'page',
        },
      ],
    },
  },
};

export default data;
