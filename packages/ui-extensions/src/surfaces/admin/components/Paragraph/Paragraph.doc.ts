import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Paragraph',
  description:
    'Use this to display a block of text similar to the `<p>` tag in HTML.',
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
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'paragraph-default.png',
    codeblock: {
      title: 'Simple Paragraph example',
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

  related: [
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/components/titles-and-text/heading',
    },
  ],
};

export default data;
