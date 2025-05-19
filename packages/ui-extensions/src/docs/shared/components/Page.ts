import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Page',
  description:
    ' Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
