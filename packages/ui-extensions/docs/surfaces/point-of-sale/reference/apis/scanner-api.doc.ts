import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForScannerApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'scanner-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Scanner API',
  description: `
The Scanner API enables an extension to access scanner data and available scanning sources supported by the device.

#### Supporting targets
- ${TargetLink.PosHomeModalRender}
- ${TargetLink.PosPurchasePostActionRender}
- ${TargetLink.PosProductDetailsActionRender}
- ${TargetLink.PosOrderDetailsActionRender}
- ${TargetLink.PosDraftOrderDetailsActionRender}
- ${TargetLink.PosCustomerDetailsActionMenuItemRender}
`,
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
        codeblock: generateCodeBlockForScannerApi(
          'Conditional scanner source rendering example',
          'conditional-scanner-example',
        ),
      },
    ],
  },
};

export default data;
