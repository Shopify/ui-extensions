// Documentation file for NumberField
import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'Use a number field when you need to collect numerical input from merchants. It provides appropriate keyboard settings and validation for numerical values.',
  requires: '',
  thumbnail: 'numberfield-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'NumberField',
      description: 'A specialized text input field for numerical values.',
      type: 'NumberFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'numberfield-default.png',
    codeblock: {
      title: 'Basic NumberField example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/basic-number-field.example.tsx',
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
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'MoneyField',
      url: '/docs/api/admin-extensions/components/forms/moneyfield',
    },
  ],
};

export default data;
