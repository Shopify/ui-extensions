import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Switch',
  description:
    'Use `s-switch` when you want to provide users with a clear selection option, such as toggling options on/off.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
