import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Image',
  description:
    'Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.',
  category: 'Polaris web components',
  subCategory: 'Media',
};

export default data;
