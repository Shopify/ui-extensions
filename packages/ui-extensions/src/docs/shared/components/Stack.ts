import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Stack',
  description:
    'Organizes elements horizontally or vertically along the block or inline axis. Use to structure layouts, group related components, or control spacing between elements.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
