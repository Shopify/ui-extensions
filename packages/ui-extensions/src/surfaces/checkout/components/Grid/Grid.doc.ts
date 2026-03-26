import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Grid';
import gridItemSharedContent from '../../../../docs/shared/components/GridItem';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'grid-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'GridProps',
    },
    {
      title: gridItemSharedContent.name,
      description: gridItemSharedContent.description,
      type: 'GridItemProps',
    },
  ],
  defaultExample: {
    image: 'grid-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-grid.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Use `placeItems="center"` to align content on both axes. This example creates a two-column grid with centered text labels.',
        codeblock: {
          title: 'Center items in a two-column grid',
          tabs: [
            {
              code: './examples/grid-centered.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [],
};

export default data;
