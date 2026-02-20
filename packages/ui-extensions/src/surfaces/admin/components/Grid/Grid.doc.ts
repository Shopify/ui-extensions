import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Grid';
import gridItemSharedContent from '../../../../docs/shared/components/GridItem';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Design for different screen sizes:** Layouts that work well on desktop often fail on mobile. Plan how your grid should reflow or reconfigure for smaller screens rather than creating a fixed layout that doesn't adapt.
- **Keep spacing consistent:** Consistent spacing between grid items creates visual rhythm and makes layouts easier to scan. Avoid mixing different spacing approaches within the same grid.
- **Consider content overflow:** Grid cells have fixed dimensions, but content length varies. Plan how your layout handles content that's too long or too wide, whether through wrapping, truncation, or scrolling.
- **Use semantic alternatives when appropriate:** Before using the component, consider whether simpler layout components would work. Grid's power comes with complexity, so use it when you need its specific capabilities.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't support CSS subgrid for aligning nested grid tracks with parent grids. If you need nested grids to align with parent grid lines, you'll need to manually coordinate the sizing or use a different layout approach.`,
    },
  ],
  thumbnail: '/assets/templated-apis-screenshots/admin/components/grid.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the grid component.',
      type: 'Grid',
    },
    {
      title: 'Slots',
      description:
        'The grid component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'GridSlots',
    },
    {
      title: gridItemSharedContent.name,
      description: gridItemSharedContent.description,
      type: 'GridItem',
    },
    {
      title: 'Slots',
      description:
        'The grid item component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
              'Grid layout with full-width, half-width, and third-width column arrangements.',
            codeblock: {
              title: 'Layout with spans',
              tabs: [
                {
                  code: './examples/col-span-layouts.html',
                  language: 'html',
                },

                {
                  code: './examples/col-span-layouts.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Adaptive grid that automatically adjusts column count based on screen size.',
            codeblock: {
              title: 'Responsive grid',
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
