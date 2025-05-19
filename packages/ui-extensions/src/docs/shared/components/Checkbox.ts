import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Checkbox',
  description:
    'Use `s-checkbox` when you want to provide users with a clear selection option, such as for agreeing to terms and conditions or selecting multiple options from a list.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
