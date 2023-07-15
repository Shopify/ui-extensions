import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Form',
  description:
    'Use this component when you want to collect input from users. It provides a structure for various input fields and controls, such as text fields, checkboxes, and buttons. It also handles form submission and reset actions.',
  requires: '',
  thumbnail: 'form-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'FormProps',
      description: '',
      type: 'FormProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'form-default.png',
    codeblock: {
      title: 'Simple form implementation',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Form/examples/basic-Form.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Form.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'TextField',
      subtitle: 'Use this when you need users to provide text input',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'NumberField',
      subtitle: 'Use this when you need users to provide numeric input',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
    {
      type: 'component',
      name: 'EmailField',
      subtitle:
        'Use this when you need users to provide their email addresses.',
      url: '/docs/api/admin-extensions/components/forms/emailfield',
    },
    {
      type: 'component',
      name: 'ChoiceList',
      subtitle: 'Use this when you need users to select from a list of options',
      url: '/docs/api/admin-extensions/components/forms/choicelist',
    },
  ],
};

export default data;
