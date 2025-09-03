import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForDeviceApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'device-api', fileName);

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
  examples: {
    description: 'Examples of using the Device API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Retrieve name of the device.',
          'name',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Retrieve the ID of the device.',
          'device-id',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Check if device is a tablet.',
          'tablet',
        ),
      },
    ],
  },
};

export default data;
