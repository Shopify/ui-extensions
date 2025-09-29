import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Grid';
import gridItemSharedContent from '../../../../docs/shared/components/GridItem';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Organizing content into a grid-like layout with columns and rows with consistent alignment and spacing.
- Creating responsive layouts with consistent spacing.`,
    },
    {
      title: 'Considerations',
      type: 'Generic' as const,
      anchorLink: 'considerations',
      sectionContent: `- Grid doesn't include any padding by default. If you need padding around your grid, use \`base\` to apply the default padding.
- Grid will allow children to overflow unless template rows/columns are properly set.
- Grid will always wrap children to a new line. If you need to control the wrapping behavior, use \`s-stack\` or \`s-box\`.`,
    },
  ],
  thumbnail: '/assets/templated-apis-screenshots/admin/components/grid.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Grid',
    },
    {
      title: 'Slots',
      description: '',
      type: 'GridSlots',
    },
    {
      title: gridItemSharedContent.name,
      description: gridItemSharedContent.description,
      type: 'GridItem',
    },
    {
      title: 'Slots',
      description: '',
      type: 'GridItemSlots',
    },
  ],
  defaultExample: {
    image: 'grid-default.png',
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
