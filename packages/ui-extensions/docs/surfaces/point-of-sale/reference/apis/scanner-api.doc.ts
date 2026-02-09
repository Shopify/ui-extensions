import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForScannerApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'scanner-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Scanner API',
  description:
    'The Scanner API provides access to barcode and QR code scanning functionality on POS devices, allowing you to subscribe to scan events, monitor available scanner sources, and process scanned data through subscription callbacks. The API enables integration with device cameras, external scanners, and embedded scanning hardware.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ScannerApi` object provides access to scanning functionality and scanner source information. Access these properties through `api.scanner` to monitor scan events and available scanner sources.',
      type: 'ScannerApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  related: [],
  examples: {
    description:
      'Learn how to handle barcode and QR code scans from cameras, external scanners, and embedded hardware.',
    examples: [
      {
        codeblock: generateCodeBlockForScannerApi(
          'Adapt UI to available scanner types',
          'conditional-scanner-example',
        ),
        description:
          'Adapt your scanning interface based on available hardware capabilities. This example shows how to conditionally render appropriate scanning UI for different device types—using camera scanning on devices with cameras while falling back to embedded scanning on devices like POS GO that lack camera hardware, ensuring a functional experience across all POS devices.',
      },
      {
        codeblock: generateCodeBlockForScannerApi(
          'Add products from hardware scanner',
          'hardware-scanner-example',
        ),
        description:
          'Automatically add products to the cart when barcodes are scanned using external hardware scanners. This example listens for scan events and uses the scanned data to search for and add matching products, creating a seamless scanning workflow that works with physical scanners connected to the POS device.',
      },
      {
        codeblock: generateCodeBlockForScannerApi(
          'Monitor available scanner hardware',
          'subscribable-sources',
        ),
        description:
          'Subscribe to scanner source changes to detect which scanning methods are available on the device. This example demonstrates tracking available scanner sources (camera, external, embedded) in real time, allowing you to adapt your UI and functionality based on hardware capabilities.',
      },
      {
        codeblock: generateCodeBlockForScannerApi(
          'Subscribe to scan events',
          'subscribable-events',
        ),
        description:
          'Subscribe to scan events to process barcode and QR code data as it arrives. This example shows how to listen for scans from any available scanner source (camera, external scanner, or embedded hardware), enabling you to add products to cart, look up information, or trigger custom workflows based on scanned codes.',
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Validate scanned data appropriately:** Validate scanned data before processing, implementing proper error handling for invalid codes, unsupported formats, or scanning errors.\n- **Provide clear scanning feedback:** Give users clear feedback about scan results, including success confirmations, error messages, and guidance when scans fail or produce invalid data.\n- **Adapt to available scanner sources:** Check available scanner sources and adapt your interface accordingly.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- The Scanner API is only available in action (modal) targets where scanning functionality is supported and can't be used in other targets.\n- \`RemoteSubscribable\` supports only one subscription at a time. Use \`makeStatefulSubscribable\` if you need multiple components to subscribe to scan events simultaneously.\n- Scanning availability depends on device hardware capabilities and may vary between different POS devices and configurations.\n`,
    },
  ],
};

export default data;
