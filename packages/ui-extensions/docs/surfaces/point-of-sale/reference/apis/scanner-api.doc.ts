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
  examples: {
    description: 'Examples of receiving updates from the Scanner API',
    examples: [
      {
        codeblock: generateCodeBlockForScannerApi(
          'Conditional scanner source rendering example',
          'conditional-scanner-example',
        ),
      },
    ],
  },
};

export default data;
