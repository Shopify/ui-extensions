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
      title: 'Properties',
      description:
        'The `DeviceApi` object provides access to device information and capabilities. Access these properties through `api.device` to retrieve device details and check device characteristics.',
      type: 'DeviceApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  related: [],
  examples: {
    description:
      'Learn how to access device information and adapt your extension based on hardware characteristics.',
    examples: [
      {
        codeblock: generateCodeBlockForDeviceApi(
          'Check if the device is a tablet',
          'tablet',
        ),
        description:
          'Check whether the extension is running on a tablet form factor. This example uses the `isTablet` property to determine the device type, allowing you to adapt layouts, adjust component sizing, or enable tablet-specific features for larger screen experiences.',
      },
      {
        codeblock: generateCodeBlockForDeviceApi(
          'Get the device ID',
          'device-id',
        ),
        description:
          'Retrieve the unique identifier for the device running your extension. This example accesses the device ID, enabling device-specific tracking, settings synchronization, or associating actions with specific POS terminals for audit trails and analytics.',
      },
      {
        codeblock: generateCodeBlockForDeviceApi('Get the device name', 'name'),
        description:
          "Retrieve the human-readable name of the device running your extension. This example accesses the device's name, which can be useful for debugging, analytics, device-specific customization, or displaying device information to staff members.",
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Handle async device queries:** Handle the Promise-based device methods with async/await or \`.then()\` patterns, and implement appropriate error handling for device query failures.\n- **Cache device information appropriately:** Consider caching device information after the initial query to avoid repeated async calls, but ensure you handle cases where device characteristics might change during the session.\n- **Provide device-appropriate experiences:** Design different user experiences for tablets versus other devices, taking advantage of larger screens while ensuring functionality works across all supported device types.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Device information queries are asynchronous and may take time to resolve, so always handle the Promise-based responses appropriately in your extension logic.\n- The Device API provides read-only access to device information and can't be used to modify device settings or capabilities.\n- Device type detection is limited to basic form factor identification (tablet vs. non-tablet) and doesn't provide detailed hardware specifications or capabilities.\n`,
    },
  ],
};

export default data;
