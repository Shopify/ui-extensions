import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'DatePicker',
  description:
    'Use a date picker to allow merchants to select a date or a date range.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
