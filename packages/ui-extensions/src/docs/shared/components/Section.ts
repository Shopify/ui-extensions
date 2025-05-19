import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Section',
  description:
    'Use `s-section` to organize your page content. Sections have defined styling, and will display differently depending on how deeply they are nested in the page.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
