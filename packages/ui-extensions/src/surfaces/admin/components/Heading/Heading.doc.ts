import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description: 'Heading is used to ...',
  requires: '',
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'HeadingProps',
      description: '',
      type: 'HeadingProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Heading/examples/basic-Heading.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Heading.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
