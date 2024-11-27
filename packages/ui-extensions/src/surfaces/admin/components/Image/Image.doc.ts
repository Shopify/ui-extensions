import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description: 'Image is used to ...',
  requires: '',
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Image',
      description: '',
      type: 'Image',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Image/examples/basic-image.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-image.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
