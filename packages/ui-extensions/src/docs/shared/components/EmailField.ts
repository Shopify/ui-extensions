import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'EmailField',
  description:
    'Use `s-email-field` to allow merchants to input email addresses. This component provides built-in email validation and appropriate keyboard settings.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
