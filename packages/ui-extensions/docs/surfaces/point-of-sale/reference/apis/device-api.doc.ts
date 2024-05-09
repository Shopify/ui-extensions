import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Device API',
  description:
    'The Device API allows the UI Extension to retrieve device information including the device name and ID.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'DeviceApi',
      description: '',
      type: 'DeviceApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
