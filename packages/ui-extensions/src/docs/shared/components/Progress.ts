import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Progress',
  description:
    'Displays an indicator showing the completion status of a task. Use to visually communicate progress in either determinate (known percentage) or indeterminate (unknown duration) states.',
  category: 'Polaris web components',
  subCategory: 'Feedback',
};

export default data;
