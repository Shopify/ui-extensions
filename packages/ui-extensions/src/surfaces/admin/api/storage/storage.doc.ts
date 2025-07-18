import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Storage',
  description:
    "This API is used to store data in the extension. It allows you to set, get, and manage key-value pairs within the app's allocated storage space. This is useful for persisting state or configuration data across user sessions.",
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'Storage',
      description: '',
      type: 'Storage',
    },
  ],
  category: 'API',
  subCategory: 'Target APIs',
  related: [],
};

export default data;
