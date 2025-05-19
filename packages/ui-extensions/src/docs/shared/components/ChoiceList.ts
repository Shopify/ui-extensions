import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'ChoiceList',
  description:
    'Use `s-choice-list` to present multiple options to merchants. Choice lists can present options with either radio buttons for single selection or checkboxes for multiple selection.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
