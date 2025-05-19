import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Divider',
  description:
    'Use `s-divider` to create a clear visual separation between different elements in your user interface.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
