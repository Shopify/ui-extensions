import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'This component renders text. Remember, you can also add your own styling.',
  requires: '',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Text',
      description: '',
      type: 'Text',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'Simple Text example',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-text.example.ts',
          language: 'js',
        },
        // {
        //   title: 'React',
        //   code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Text/examples/basic-text.example.tsx',
        //   language: 'tsx',
        // },
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
