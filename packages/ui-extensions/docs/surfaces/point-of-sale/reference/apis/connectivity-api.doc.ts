import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Connectivity API',
  description:
    'The Connectivity API enables POS UI extensions to retrieve device connectivity information, such as whether the device has an internet connection.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ConnectivityApi',
      description: '',
      type: 'ConnectivityApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
