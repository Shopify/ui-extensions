import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'UnorderedList',
  description:
    'Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
