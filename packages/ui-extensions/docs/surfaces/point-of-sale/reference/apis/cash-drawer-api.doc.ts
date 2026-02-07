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
      title: 'Properties',
      description:
        'The `CashDrawerApi` object provides methods for controlling cash drawer hardware. Access these properties through `shopify.cashDrawer` to trigger cash drawer operations.',
      type: 'CashDrawerApiContent',
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
- **Implement error handling:** Wrap \`cashDrawer.open()\` calls in try-catch blocks. Show clear error messages with resolution steps.
- **Require authorization:** Implement authorization checks before opening for non-transaction operations. Consider PIN entry, manager approval, or staff permissions.
- **Provide user feedback:** Show immediate confirmations like "Cash drawer opened successfully" so staff know the operation completed.
- **Log operations for audit:** Track all openings including timestamps, staff info, and reason for loss prevention and compliance.
- **Test without hardware:** Handle scenarios where no drawer is connected with fallback workflows or clear messaging.
- **Consider timing:** Open at appropriate moments. Avoid opening multiple times in quick succession or in inappropriate workflow states.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The API only triggers the drawer opening mechanism and cannot detect whether the drawer is currently open, closed, or physically jammed—your extension is responsible for any required state tracking.
`,
    },
  ],
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
          'Open the cash drawer programmatically for manual cash handling or custom workflows. This example shows how to use `shopify.cashDrawer.open()` to trigger the connected cash drawer hardware. This is useful for no-sale transactions, manual cash operations, or register management tasks that require direct cash access.',
      },
    ],
  },
};

export default data;
