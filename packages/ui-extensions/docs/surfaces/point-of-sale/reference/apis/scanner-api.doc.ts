import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const generateCodeBlockForScannerApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'scanner-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Scanner API',
  description:
    'The Scanner API enables an extension to access scanner data and available scanning sources supported by the device.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ScannerApi',
      description: '',
      type: 'ScannerApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  requires:
    ExtensionTargetType.PosHomeModalRender ||
    ExtensionTargetType.PosPurchasePostActionRender,
  examples: {
    description: 'Examples of receiving updates from the Scanner API',
    examples: [
      {
        codeblock: generateCodeBlockForScannerApi(
          'Subscribe to scan event updates',
          'subscribable-events',
        ),
      },
      {
        codeblock: generateCodeBlockForScannerApi(
          'Receiving updates on available scanner sources',
          'subscribable-sources',
        ),
      },
    ],
    exampleGroups: [
      {
        title: 'Use cases',
        examples: [
          {
            description:
              'In this example, assuming a physical scanner is connected to the POS, any scans performed when ui extensions are in use will automatically add the product to the cart if the data exists on the shop.',
            codeblock: generateCodeBlockForScannerApi(
              'Hardware scanner example',
              'hardware-scanner-example',
            ),
          },
          {
            description:
              'There might be situations where a developer needs to conditionally render UI elements based on the available scanning sources of the device on which the extension is installed. For example, an extension could be designed for full-screen camera scanning, but a device like POS GO does not have a camera. In such cases, it would be necessary to avoid rendering the camera scanner component and instead create a UI that supports embedded scanning.',
            codeblock: generateCodeBlockForScannerApi(
              'Conditional scanner source rendering example',
              'conditional-scanner-example',
            ),
          },
        ],
      },
    ],
  },
};

export default data;
