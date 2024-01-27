import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CameraScanner',
  description:
    'The camera scanner uses the devices camera to scan and decode barcodes or QR codes. It displays a live feed with guidance markers for alignment and triggers actions within the app upon successful recognition.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'CameraScanner',
      description: '',
      type: 'CameraScannerProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;
