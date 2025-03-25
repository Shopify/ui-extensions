import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'Use a text field to allow merchants to enter or edit text. Text fields provide a single-line input area for collecting string values from users.',
  requires: '',
  thumbnail: 'textfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TextField',
      description:
        'A text input field that allows users to enter and edit text.',
      type: 'TextField',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'text-field-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.html',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'TextArea',
      url: '/docs/api/admin-extensions/components/forms/textarea',
    },
    {
      type: 'component',
      name: 'EmailField',
      url: '/docs/api/admin-extensions/components/forms/emailfield',
    },
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
  ],
};

export default data;
