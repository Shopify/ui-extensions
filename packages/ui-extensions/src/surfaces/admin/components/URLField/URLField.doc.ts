import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'URLField',
  description: 'This is the right component for letting users enter a URL.',
  requires: '',
  thumbnail: 'urlfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'URLFieldProps',
      description: '',
      type: 'URLFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'urlfield-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/URLField/examples/basic-URLField.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-URLField.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
