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
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Handle scan events reactively:** Use \`subscribe\` methods to process scan events as they occur for immediate feedback.
- **Validate scanned data:** Validate before processing and handle invalid codes, unsupported formats, or errors.
- **Provide clear feedback:** Show success confirmations, error messages, and guidance when scans fail.
- **Adapt to available sources:** Check available scanner sources and provide alternatives when preferred methods aren't available.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- The Scanner API is only available in action (modal) targets where scanning functionality is supported and can't be used in other targets.
- Scan data processing is reactive and requires proper subscription management to avoid memory leaks or unexpected behavior when components unmount.
`,
    },
  ],
  related: [],
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
          'Subscribe to scan events and adapt behavior based on the scanner source. This example shows how to use `shopify.scanner.subscribe()` to receive scan events and check `shopify.scanner.source` to determine which scanner type was used (camera, external scanner, or embedded hardware). By identifying the scanner type, you can customize handling based on the scanning method.',
      },
    ],
  },
};

export default data;
