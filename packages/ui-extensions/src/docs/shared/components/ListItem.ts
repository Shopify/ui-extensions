import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'ListItem',
  description:
    'Represents a single item within an unordered or ordered list. Use only as a child of `s-unordered-list` or `s-ordered-list` components.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
