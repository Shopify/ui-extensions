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
      type: 'MoneyFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'moneyfield-default.png',
    codeblock: {
      title: 'Basic MoneyField example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-money-field.example.tsx',
          language: 'tsx',
        },
        {
          title: 'Preview',
          code: './examples/preview.html',
          language: 'preview',
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
