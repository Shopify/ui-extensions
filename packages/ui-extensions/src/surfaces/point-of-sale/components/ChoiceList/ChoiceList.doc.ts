import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'Use `s-choice-list` to group related choices together, allowing single or multiple selections. Provides a structured way to present options to users.',
  thumbnail: 'choice-list-thumbnail.png',
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
        'Use `s-choice` to create individual selectable options within choice lists. Provides consistent styling and behavior for form selections.',
      type: 'Choice',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choice-list-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'HTML',
        },
      ],
    },
  },
  related: [],
};

export default data;
