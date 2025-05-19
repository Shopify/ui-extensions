import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'URLField',
  description: 'Use a URLField when you need to collect URLs from merchants.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
