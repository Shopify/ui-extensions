import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'PaymentIcon',
  description:
    'Displays icons representing payment methods. Use to visually communicate available or saved payment options clearly',
  category: 'Polaris web components',
  subCategory: 'Media',
};

export default data;
