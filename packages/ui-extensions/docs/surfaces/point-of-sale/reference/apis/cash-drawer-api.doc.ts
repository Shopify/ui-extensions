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
    description:
      'Learn how to programmatically control cash drawer hardware operations.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCashDrawerApi(
          'Trigger the cash drawer to open',
          'default.example',
        ),
        description:
          'Open the cash drawer programmatically for manual cash handling or custom workflows. This example shows how to use `shopify.cashDrawer.open()` to trigger the connected cash drawer hardware, useful for no-sale transactions, manual cash operations, or register management tasks that require direct cash access.',
      },
    ],
  },
};

export default data;
