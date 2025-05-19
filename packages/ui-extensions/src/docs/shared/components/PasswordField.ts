import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'PasswordField',
  description:
    'Use `s-password-field` when you need to collect sensitive information from merchants.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
