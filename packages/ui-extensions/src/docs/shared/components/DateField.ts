import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'The `DateField` component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.' +
    // Removed reference to DateSpinner (POS-specific component not available in App Home)
    // Removed POS-specific links to DatePicker
    '\n\nThe component supports manual text entry. For visual calendar-based selection, consider using `DatePicker`.',
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [],
};

export default data;
