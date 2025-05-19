import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'MoneyField',
  description:
    'Use `s-money-field` when you need to collect monetary values from merchants. It provides appropriate formatting and validation for currency amounts.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
