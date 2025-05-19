import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Table',
  description:
    'Use `s-table` to organize and display data in a tabular format. Tables help merchants view, analyze, and compare data. By default the `s-table` renders as a list on mobile devices and a table on desktop devices.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
