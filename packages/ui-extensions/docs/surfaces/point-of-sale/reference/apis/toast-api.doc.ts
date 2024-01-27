import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Toast API',
  description: 'The Toast API allows the display of a Toast component.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ToastApi',
      description: '',
      type: 'ToastApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
