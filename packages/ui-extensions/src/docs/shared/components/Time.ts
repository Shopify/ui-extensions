import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Time',
  description:
    'Represents a specific point or duration in time. Use to display dates, times, or durations clearly and consistently. May include a machine-readable `datetime` attribute for improved accessibility and functionality.',
  category: 'Polaris web components',
  subCategory: 'Titles and text',
};

export default data;
