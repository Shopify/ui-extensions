import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Clickable',
  description:
    'The `s-clickable` component is an escape hatch for when `s-button` and `s-link` are not sufficient to create an interactive element.',
  category: 'Polaris web components',
  subCategory: 'Actions',
};

export default data;
