import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForScannerApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'scanner-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Scanner API',
  description:
    'The Scanner API provides barcode and QR code scanning on POS devices. Use it to show the camera scanner, subscribe to scan events, or detect available scanner hardware (camera, external, or embedded).',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ScannerApi` object provides access to scanning functionality and scanner source information. Access these properties through `shopify.scanner` to monitor scan events and available scanner sources.',
      type: 'ScannerApiContent',
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
      sectionContent: `
- **Deduplicate scan events:** The subscription can fire multiple times for the same code, including stale data from a previous scan when re-subscribing after a component remount. Track the last processed value and skip duplicates.
- **Manage camera lifecycle:** Call \`hideCameraScanner()\` before showing results or a loading state. Call \`showCameraScanner()\` when the user is ready to scan again.
- **Clean up subscriptions:** Call the unsubscribe function returned by \`subscribe()\` in your cleanup or unmount handler to prevent memory leaks.
- **Validate scanned data:** Check the format of scanned data before processing. Show clear feedback for invalid codes, network errors, and unsupported formats.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- The Scanner API is only available in action (modal) targets.
- \`showCameraScanner()\` displays a full-screen system camera overlay. It doesn't return a value or promise, so there's no way to detect if the camera activated successfully.
- Calling \`scannerData.current.subscribe()\` may immediately emit the value from a previous scan because unsubscribing does not clear the signal.
`,
    },
  ],
  examples: {
    description:
      'Learn how to scan codes, process results, and detect available scanner hardware.',
    examples: [
      {
        codeblock: generateCodeBlockForScannerApi(
          'Verify a scanned code with a backend',
          'verify-scanned-code',
        ),
        description:
          'Build a scan-and-verify workflow. Open the camera on mount, send scanned data to a backend for validation, and show loading, success, or error states. Hide the camera during verification and restore it when the user taps **Scan next**.',
      },
      {
        codeblock: generateCodeBlockForScannerApi(
          'Detect available scanner sources',
          'conditional-scanner-example',
        ),
        description:
          'Subscribe to `shopify.scanner.sources.current` to detect which scanner hardware is available (camera, external, or embedded) and to `shopify.scanner.scannerData.current` to receive scan results. By identifying the scanner type, you can customize handling based on the scanning method.',
      },
    ],
  },
};

export default data;
