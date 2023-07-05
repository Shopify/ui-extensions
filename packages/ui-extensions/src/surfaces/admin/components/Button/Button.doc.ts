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
      title: 'ButtonProps',
      description: '',
      type: 'ButtonProps',
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
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Button/examples/basic-Button.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Button.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
