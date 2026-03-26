import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ProductThumbnail';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'product-thumbnail-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ProductThumbnailProps',
    },
  ],
  defaultExample: {
    image: 'product-thumbnail-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-product-thumbnail.example.html',
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
};

export default data;
