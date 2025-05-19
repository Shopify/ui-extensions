import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'OrderedList',
  description:
    'Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
