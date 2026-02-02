import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'The `DatePicker` component allows merchants to select dates using a calendar interface. Use it when merchants benefit from seeing dates in context of the full month, such as selecting dates relative to today or needing weekday context.' +
    // Removed reference to DateSpinner (POS-specific component not available in App Home)
    // Removed POS-specific link to DateField
    '\n\nThe component supports single dates, multiple dates, and date ranges. For text date entry, use `DateField`.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [],
};

export default data;
