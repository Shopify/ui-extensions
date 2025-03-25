import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'MoneyField',
  description:
    'Use a money field when you need to collect monetary values from merchants. It provides appropriate formatting and validation for currency amounts.',
  requires: '',
  thumbnail: 'moneyfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'MoneyField',
      description: 'A specialized input field for monetary values.',
      type: 'MoneyField',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'moneyfield-default.png',
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
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
  ],
};

export default data;
