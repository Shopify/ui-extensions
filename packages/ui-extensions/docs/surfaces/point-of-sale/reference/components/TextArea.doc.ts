import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'Use a text field to allow merchants to input or modify multiline text.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TextArea',
      description: '',
      type: 'TextAreaProps',
    },
  ],
  category: 'Components',
  thumbnail: 'textarea-thumbnail.png',
  related: [],
  defaultExample: {
    image: 'textarea-default.png',
    codeblock: {
      title: 'Basic TextArea',
      tabs: [
        {
          code: '../examples/text-area/default.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },
};

export default data;
