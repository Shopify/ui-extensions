import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Block Extension API',
  featureFlag: 'admin_extensibility',
  description: 'This API is available to all block extension types.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'BlockExtensionApi',
      description: '',
      type: 'BlockExtensionApi',
    },
  ],
  category: 'API',
  related: [],
};

export default data;
