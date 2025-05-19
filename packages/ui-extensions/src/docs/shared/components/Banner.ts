import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Banner',
  description:
    'Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.',
  category: 'Polaris web components',
  subCategory: 'Feedback',
};

export default data;
