import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Divider';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Separating elements inside sections.
- Visually grouping related content in forms and lists.`,
    },
  ],
  thumbnail: '/assets/templated-apis-screenshots/admin/components/divider.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Divider',
    },
  ],
  defaultExample: {
    image: 'divider-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
};

export default data;
