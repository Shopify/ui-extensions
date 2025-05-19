import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Select',
  description:
    '`s-select` lets merchants choose one option from an options menu. Consider `s-select` when you have 4 or more options, to avoid cluttering the interface.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
