import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'QRCode',
  description:
    'Displays a scannable QR code representing data such as URLs or text. Use to let users quickly access information by scanning with a smartphone or other device.',
  category: 'Polaris web components',
  subCategory: 'Other',
};

export default data;
