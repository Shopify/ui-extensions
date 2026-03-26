import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Grid';
import gridItemSharedContent from '../../../../docs/shared/components/GridItem';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
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
  subcomponent: {
    ...gridItemSharedContent,
    definitions: {properties: true},
  },
});

export default data;
