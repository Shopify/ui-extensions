import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

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
  examples: {
    description: 'Examples of receiving updates from the Scanner API',
    examples: [
      {
        codeblock: generateCodeBlock(
          'Subscribe to scan event updates',
          'scanner-api',
          'subscribable-events',
        ),
      },
      {
        codeblock: generateCodeBlock(
          'Receiving updates on available scanner sources for the POS',
          'scanner-api',
          'subscribable-sources',
        ),
      },
    ],
    exampleGroups: [
      {
        title: 'Hardware scanner example',
        examples: [
          {
            description:
              'In this example, assuming a physical scanner is connected to the POS, any scans performed when ui extensions are in use will automatically add the product to the cart if the data exists on the shop.',
            codeblock: generateCodeBlock(
              'Hardware scanner ',
              'scanner-api',
              'hardware-scanner-example',
            ),
          },
        ],
      },
      {
        title: 'Conditional scanner source rendering example',
        examples: [
          {
            description:
              'There might be situations where a developer needs to conditionally render UI elements based on the available scanning sources of the device on which the extension is installed. For example, an extension could be designed for full-screen camera scanning, but a device like POS GO does not have a camera. In such cases, it would be necessary to avoid rendering the camera scanner component and instead create a UI that supports embedded scanning.',
            codeblock: generateCodeBlock(
              'Conditional scanner source rendering example',
              'scanner-api',
              'hardware-scanner-example',
            ),
          },
        ],
      },
    ],
  },
};

export default data;
