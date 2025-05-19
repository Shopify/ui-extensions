import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'SearchField',
  description:
    'Use a search field to allow merchants to search for a specific item or search term. Search fields provide a single-line input area for collecting string values from users.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
