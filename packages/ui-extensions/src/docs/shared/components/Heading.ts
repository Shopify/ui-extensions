import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Heading',
  description:
    'Renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful and accessible page outline.',
  category: 'Polaris web components',
  subCategory: 'Titles and text',
};

export default data;
