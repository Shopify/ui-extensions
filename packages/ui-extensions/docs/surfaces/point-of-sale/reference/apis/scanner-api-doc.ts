import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Scanner API',
  description:
    'The Scanner API enables an extension to access scanner data and available scanning sources supported by the device.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ScannerApi',
      description: '',
      type: 'ScannerApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
