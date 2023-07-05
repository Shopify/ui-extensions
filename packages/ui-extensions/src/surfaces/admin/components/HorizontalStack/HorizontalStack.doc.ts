import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'HorizontalStack',
  description: 'HorizontalStack is used to ...',
  requires: '',
  thumbnail: 'horizontalstack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'HorizontalStackProps',
      description: '',
      type: 'HorizontalStackProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'horizontalstack-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/HorizontalStack/examples/basic-HorizontalStack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-HorizontalStack.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
