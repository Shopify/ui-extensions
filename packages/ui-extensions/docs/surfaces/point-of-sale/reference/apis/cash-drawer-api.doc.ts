import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForCashDrawerApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'cash-drawer-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cash Drawer API',
  description: `
The Cash Drawer API is an API exposed to extensions for cash drawer functionality, specifically allowing UI extensions to control cash drawer operations.

#### Supporting targets
- ${TargetLink.PosHomeTileRender}
- ${TargetLink.PosHomeModalRender}
- ${TargetLink.PosPurchasePostActionMenuItemRender}
- ${TargetLink.PosPurchasePostActionRender}
- ${TargetLink.PosPurchasePostBlockRender}
- ${TargetLink.PosReturnPostActionMenuItemRender}
- ${TargetLink.PosReturnPostActionRender}
- ${TargetLink.PosReturnPostBlockRender}
- ${TargetLink.PosExchangePostActionMenuItemRender}
- ${TargetLink.PosExchangePostActionRender}
- ${TargetLink.PosExchangePostBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CashDrawerApi',
      description: 'Interface for handling cash drawer operations.',
      type: 'CashDrawerApi',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Cash Drawer API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCashDrawerApi(
          'Open the cash drawer',
          'default.example',
        ),
      },
    ],
  },
};

export default data;
