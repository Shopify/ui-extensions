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
      title: 'ImageProps',
      description: '',
      type: 'ImageProps',
    },
  ],
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-image.example.html',
          language: '',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'loading',
      title: 'Loading',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"eager"</code> | Image is loaded immediately, regardless of whether or not the image is currently within the visible viewport. |\n| <code>"lazy"</code> | Image is loaded when it’s within the visible viewport. |',
    },
  ],
  related: [],
};

export default data;
