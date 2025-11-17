import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForCashDrawerApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'cash-drawer-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cash Drawer API',
  description:
    'The Cash Drawer API provides programmatic control over cash drawer hardware connected to POS devices. Use this API to trigger cash drawer operations for manual cash handling, custom payment workflows, or register management tasks.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CashDrawerApi',
      description:
        'The `CashDrawerApi` object provides methods for controlling cash drawer hardware. Access these methods through `shopify.cashDrawer` to trigger cash drawer operations.',
      type: 'CashDrawerApiContent',
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
