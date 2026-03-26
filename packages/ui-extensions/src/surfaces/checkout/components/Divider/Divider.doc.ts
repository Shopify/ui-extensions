import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Divider';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Use `direction="block"` to draw a rule along the block axis between vertically stacked content. This example shows a checkout summary with a divider between subtotal and tax.',
        codeblock: {
          title: 'Separate stacked labels with a block divider',
          tabs: [
            {
              code: './examples/divider-block.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
