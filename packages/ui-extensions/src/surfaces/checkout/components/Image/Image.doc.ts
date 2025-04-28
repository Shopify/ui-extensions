import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'Use `s-image` when you want to display an image. \n\n When using images or illustrations in your app, ensure that they add clarity and clearly direct users to the next step. Make sure to use high-resolution images to ensure a professional, high-quality experience.',
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
  category: 'Components',
  subCategory: 'Media',
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
