import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

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
        codeblock: generateCodeBlock(
          'Retrieve name of the device.',
          'device-api',
          'name',
        ),
      },
      {
        codeblock: generateCodeBlock(
          'Retrieve the ID of the device.',
          'device-api',
          'device-id',
        ),
      },
      {
        codeblock: generateCodeBlock(
          'Check if device is a tablet.',
          'device-api',
          'tablet',
        ),
      },
    ],
  },
};

export default data;
