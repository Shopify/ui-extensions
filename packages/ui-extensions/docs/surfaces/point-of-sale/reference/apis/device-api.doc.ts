import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForDeviceApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'device-api', fileName);

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
        'The `DeviceApi` object provides access to device information and capabilities. Access these properties and methods through `shopify.device` to retrieve device details and check device characteristics.',
      type: 'DeviceApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description:
      'Learn how to access device information and adapt your extension based on device characteristics.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Check if the device is a tablet',
          'tablet',
        ),
        description:
          'Determine whether the extension is running on a tablet form factor. This example shows how to use `shopify.device.isTablet()` to check the device type, allowing you to adapt your UI layout, component sizes, or features based on whether the device is a tablet or other form factor.',
      },
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Display the device ID',
          'device-id',
        ),
        description:
          'Access the unique identifier of the POS device. This example demonstrates using `shopify.device.id` to retrieve the device ID, which can be used for device-specific configurations, tracking, or associating data with particular devices.',
      },
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Display the device name',
          'name',
        ),
        description:
          'Access the name of the POS device running your extension. This example shows how to use `shopify.device.name` to retrieve the device name, which can be useful for debugging, analytics, or displaying device-specific information to users.',
      },
    ],
  },
};

export default data;
