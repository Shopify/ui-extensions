import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'URLField',
  description: 'Use a URLField when you need to collect URLs from merchants.',
  requires: '',
  thumbnail: 'urlfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'URLField',
      description: 'A specialized text input field for URLs.',
      type: 'URLField',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'urlfield-default.png',
    codeblock: {
      title: 'Add a URLField to your app.',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-urlfield.example.tsx',
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
