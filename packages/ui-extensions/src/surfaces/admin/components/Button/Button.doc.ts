import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'Use this component when you want to provide users the ability to perform specific actions, like saving data.',
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
  subCategory: 'Actions',
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'Add a simple button to your app.',
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
