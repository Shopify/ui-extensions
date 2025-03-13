// Documentation file for TextArea
import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'Use a text area when you need to collect longer text content from merchants. Text areas allow for multiple lines of text and automatically expand to fit the content.',
  requires: '',
  thumbnail: 'textarea-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TextArea',
      description: 'A multi-line text input field.',
      type: 'TextAreaProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'textarea-default.png',
    codeblock: {
      title: 'Basic TextArea example',
      tabs: [
        {
          title: 'Peact',
          code: './examples/basic-text-area.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-text-area.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
  ],
};

export default data;
