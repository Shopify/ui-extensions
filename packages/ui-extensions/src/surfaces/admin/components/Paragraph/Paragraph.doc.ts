import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Paragraph',
  description: 'Paragraph is used to ...',
  requires: '',
  thumbnail: 'paragraph-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Paragraph',
      description: '',
      type: 'Paragraph',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'paragraph-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-paragraph.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Paragraph/examples/basic-paragraph.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },

  related: [],
};

export default data;
