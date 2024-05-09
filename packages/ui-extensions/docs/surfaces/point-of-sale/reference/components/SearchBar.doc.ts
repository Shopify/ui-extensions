import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'SearchBar',
  description:
    'The search bar lets merchants enter search queries for objects throughout the app.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'SearchBar',
      description: '',
      type: 'SearchBarProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;
