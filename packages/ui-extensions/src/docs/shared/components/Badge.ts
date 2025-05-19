import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Badge',
  description:
    "Use `s-badge` to inform merchants of the status of an object or of an action that's been taken.",
  category: 'Polaris web components',
  subCategory: 'Titles and text',
};

export default data;
