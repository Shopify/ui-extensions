import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForScannerApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'scanner-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Scanner API',
  description:
    'The Scanner API provides access to barcode and QR code scanning functionality on POS devices, allowing you to subscribe to scan events, monitor available scanner sources, and process scanned data in real-time. The API enables integration with device cameras, external scanners, and embedded scanning hardware.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ScannerApi',
      description:
        'The `ScannerApi` object provides access to scanning functionality and scanner source information. Access these properties through `shopify.scanner` to monitor scan events and available scanner sources.',
      type: 'ScannerApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle scan events reactively:** Use the `subscribe` methods to automatically process scan events as they occur.\n' +
        '- **Validate scanned data appropriately:** Validate scanned data before processing, implementing proper error handling for invalid codes, unsupported formats, or scanning errors.\n' +
        '- **Provide clear scanning feedback:** Give users clear feedback about scan results, including success confirmations, error messages, and guidance when scans fail or produce invalid data.\n' +
        '- **Adapt to available scanner sources:** Check available scanner sources and adapt your interface accordingly.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The Scanner API is only available in action (modal) targets where scanning functionality is supported and can't be used in other targets.\n" +
        '- Scanning availability depends on device hardware capabilities and may vary between different POS devices and configurations.\n' +
        '- Scan data processing is reactive and requires proper subscription management to avoid memory leaks or unexpected behavior when components unmount.',
    },
  ],
  examples: {
    description:
      'Learn how to handle barcode and QR code scans and access scanner information.',
    examples: [
      {
        codeblock: generateCodeBlockForScannerApi(
          'Respond to scan events based on scanner source',
          'conditional-scanner-example',
        ),
        description:
          'Subscribe to scan events and adapt behavior based on the scanner source. This example shows how to use `shopify.scanner.subscribe()` to receive scan events and check `shopify.scanner.source` to determine which scanner type was used (camera, external scanner, or embedded hardware), allowing you to customize handling based on the scanning method.',
      },
    ],
  },
};

export default data;
