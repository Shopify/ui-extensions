import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'TextField',
  description:
    'Lets users enter or edit text within a single-line input. Use to collect short, free-form information from users.',
  category: 'Polaris web components',
  subCategory: 'Forms',
};

export default data;
