import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Box';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/box.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Creating custom designs when you can't build what you need with the existing components.
  - Setting up specific stylings such as background colors, paddings, and borders.
  - Nesting with other components.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Box',
    },
    {
      title: 'Slots',
      description: '',
      type: 'BoxSlots',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
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
};

export default data;
