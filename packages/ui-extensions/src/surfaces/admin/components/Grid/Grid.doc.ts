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
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
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
              'Simple 12-column grid system with equal-width left and right columns.',
            codeblock: {
              title: 'Basic two-column layout',
              tabs: [
                {
                  code: './examples/basic-two-column-layout.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-two-column-layout.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Flexible form grid accommodating full-width, half-width, and third-width field arrangements.',
            codeblock: {
              title: 'Form layout with responsive spans',
              tabs: [
                {
                  code: './examples/form-layout-with-responsive-spans.html',
                  language: 'html',
                },

                {
                  code: './examples/form-layout-with-responsive-spans.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Adaptive grid that automatically adjusts column count based on screen size.',
            codeblock: {
              title: 'Mobile-first responsive grid',
              tabs: [
                {
                  code: './examples/mobile-first-responsive-grid.html',
                  language: 'html',
                },

                {
                  code: './examples/mobile-first-responsive-grid.jsx',
                  language: 'preview-jsx',
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
