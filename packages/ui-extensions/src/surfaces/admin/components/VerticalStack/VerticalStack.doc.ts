import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'VerticalStack',
  description: 'VerticalStack is used to ...',
  requires: '',
  thumbnail: 'verticalstack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'VerticalStackProps',
      description: '',
      type: 'VerticalStackProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'verticalstack-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/VerticalStack/examples/basic-VerticalStack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-VerticalStack.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
