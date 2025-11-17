import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForDeviceApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'device-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Device API',
  description:
    'The Device API provides access to device information and capabilities, allowing you to retrieve device details, check device types, and adapt your extension behavior based on the POS hardware characteristics. The API enables device-aware functionality and responsive design based on device form factors.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'DeviceApi',
      description:
        'The `DeviceApi` object provides access to device information and capabilities. Access these properties and methods through `api.device` to retrieve device details and check device characteristics.',
      type: 'DeviceApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Device API.',
    examples: [
      {
        codeblock: generateCodeBlockForDeviceApi(
          'Retrieve name of the device.',
          'name',
        ),
      },
      {
        codeblock: generateCodeBlockForDeviceApi(
          'Retrieve the ID of the device.',
          'device-id',
        ),
      },
      {
        codeblock: generateCodeBlockForDeviceApi(
          'Check if device is a tablet.',
          'tablet',
        ),
      },
    ],
  },
};

export default data;
