import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'Presents multiple options for single or multiple selections. Use when merchants need to choose from a defined set of options in forms or filtering interfaces.',
  thumbnail: 'radio-button-list-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description: '',
      type: 'ChoiceListEvents',
    },
    {
      title: 'Choice',
      description:
        'Creates options that let merchants select one or multiple items from a list of choices.',
      type: 'Choice',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'radio-button-list-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;
