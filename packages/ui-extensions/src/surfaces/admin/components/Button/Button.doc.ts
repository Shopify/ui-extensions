import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description: 'Button is used to ...',
  requires: '',
  thumbnail: 'button-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Button',
      description: '',
      type: 'Button',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-button.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Button/examples/basic-button.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },

  related: [],
};

export default data;
