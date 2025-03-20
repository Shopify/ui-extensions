import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Select',
  description:
    'Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.',
  requires: '',
  thumbnail: 'select-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Select',
      description: 'A list of options that merchants can select from.',
      type: 'SelectProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'Add a select field to your app.',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-select.example.tsx',
          language: 'jsx',
        },
        {
          title: 'Preview',
          code: './examples/preview.html',
          language: 'preview',
        },
      ],
    },
  },
  related: [],
};

export default data;
