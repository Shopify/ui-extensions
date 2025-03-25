import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'Use an email field to allow merchants to input email addresses. This component provides built-in email validation and appropriate keyboard settings.',
  requires: '',
  thumbnail: 'emailfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'EmailField',
      description: 'A specialized text input field for email addresses.',
      type: 'EmailField',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'emailfield-default.png',
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
          code: './examples/default.html',
          language: 'html',
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
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'TextArea',
      url: '/docs/api/admin-extensions/components/forms/textarea',
    },
  ],
};

export default data;
