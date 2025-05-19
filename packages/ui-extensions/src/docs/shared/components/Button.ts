import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Button',
  description:
    'Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.',
  category: 'Polaris web components',
  subCategory: 'Actions',
};

export default data;
