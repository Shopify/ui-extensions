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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Implement responsive design:** Use device type info to adapt layouts, component sizes, and interactions based on form factor.
- **Handle async queries:** Handle Promise-based methods with async/await or \`.then()\` and implement error handling.
- **Cache device information:** Cache after initial query to avoid repeated async calls, but handle cases where characteristics might change.
- **Provide device-appropriate experiences:** Design different experiences for tablets versus other devices, leveraging larger screens.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Device information queries are asynchronous and may take time to resolve, so always handle the Promise-based responses appropriately in your extension logic.
- The Device API provides read-only access to device information and can't be used to modify device settings or capabilities.
- Device type detection is limited to basic form factor identification (tablet vs. non-tablet) and doesn't provide detailed hardware specifications or capabilities.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to access device information and adapt to different device types.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForDeviceApi(
          'Detect if the device is a tablet',
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
