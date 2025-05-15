import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Image';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'image-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ImageProps',
    },
  ],
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-image.example.html',
          language: '',
        },
      ],
    },
  },
};

export default data;
