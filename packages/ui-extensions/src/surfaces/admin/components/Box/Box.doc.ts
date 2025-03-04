import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'This is your foundational structural element for composing UI. It can be styled using predefined tokens. Use it to build your layout.',
  requires: '',
  thumbnail: 'box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Box',
      description: '',
      type: 'Box',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Use Box to build your layout',
      tabs: [
        {
          title: 'Preact',
          code: './examples/basic-box.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-box.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
