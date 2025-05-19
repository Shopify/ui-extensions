import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Link',
  description:
    'Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.',
  category: 'Polaris web components',
  subCategory: 'Actions',
};

export default data;
