import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description:
    'Use this component when you want to provide users with a clear selection option, such as for agreeing to terms and conditions or selecting multiple options from a list.',
  requires: '',
  thumbnail: 'checkbox-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'CheckboxProps',
      description: '',
      type: 'CheckboxProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'checkbox-default.png',
    codeblock: {
      title: 'Basic Checkbox example',
      tabs: [
        {
          title: 'HTML',
          code: './examples/basic-checkbox.example.tsx',
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
      name: 'Select',
      url: '/docs/api/admin-extensions/components/forms/select',
    },
    {
      type: 'component',
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/components/forms/choice-list',
    },
  ],
};

export default data;
