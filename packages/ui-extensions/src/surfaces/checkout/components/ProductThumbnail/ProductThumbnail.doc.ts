import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ProductThumbnail';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Render a small product image for compact line-item layouts. This example uses `size="small"` and a descriptive `alt` attribute for accessibility.',
        codeblock: {
          title: 'Display a compact product thumbnail',
          tabs: [
            {
              code: './examples/product-thumbnail-compact.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
});

export default data;
