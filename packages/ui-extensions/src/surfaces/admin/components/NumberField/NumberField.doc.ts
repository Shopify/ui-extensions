import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  featureFlag: 'admin_extensibility',
  description:
    'This component is specifically designed for numeric data entry.',
  requires: '',
  thumbnail: 'numberfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'NumberFieldProps',
      description: '',
      type: 'NumberFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'numberfield-default.png',
    codeblock: {
      title: 'Simple NumberField example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/NumberField/examples/basic-NumberField.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-NumberField.example.ts',
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
