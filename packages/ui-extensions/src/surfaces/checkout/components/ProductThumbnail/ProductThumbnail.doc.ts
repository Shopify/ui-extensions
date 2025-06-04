import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ProductThumbnail';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'productthumbnail-thumbnail.png',
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
    image: 'productthumbnail-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-productthumbnail.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
