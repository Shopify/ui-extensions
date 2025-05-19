import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'NumberField',
  description:
    'Use `s-number-field` when you need to collect numerical input from merchants. It provides appropriate keyboard settings and validation for numerical values.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
