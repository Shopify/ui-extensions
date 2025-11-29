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
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Implement responsive design:** Use device type information to adapt your interface layouts, component sizes, and interaction patterns based on the device form factor and capabilities.\n' +
        '- **Handle async device queries:** Handle the Promise-based device methods with async/await or `.then()` patterns, and implement appropriate error handling for device query failures.\n' +
        '- **Cache device information appropriately:** Consider caching device information after the initial query to avoid repeated async calls, but ensure you handle cases where device characteristics might change during the session.\n' +
        '- **Provide device-appropriate experiences:** Design different user experiences for tablets versus other devices, taking advantage of larger screens while ensuring functionality works across all supported device types.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Device information queries are asynchronous and may take time to resolve, so always handle the Promise-based responses appropriately in your extension logic.
`,
    },
  ],
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
          'Check if the POS device is running on tablet hardware to adapt your UI accordingly. This example shows how to use `shopify.device.isTablet()` to determine the device form factor. This enables responsive layouts and touch-optimized interfaces for tablet devices versus traditional POS terminals.',
      },
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Display the device ID',
          'device-id',
        ),
        description:
          'Access the unique identifier of the current POS device. This example demonstrates using `shopify.device.id` to retrieve the device ID. This enables device-specific configurations, analytics tracking, or multi-device coordination features.',
      },
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Display the device name',
          'name',
        ),
        description:
          'Access the friendly name of the current POS device. This example shows how to use `shopify.device.name` to retrieve the device name configured in POS settings. This is useful for device identification, multi-device workflows, or displaying location-specific information.',
      },
    ],
  },
};

export default data;
