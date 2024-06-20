import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCustomerApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'customer-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer API',
  description: `
The customer API provides an extension with data about the current customer.

### Supporting targets
- ${TargetLink.PosCustomerDetailsActionMenuItemRender}
- ${TargetLink.PosCustomerDetailsActionRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CustomerApi',
      description: '',
      type: 'CustomerApiContent',
    },
  ],
  examples: {
    description: 'Examples of using the Customer API.',
    examples: [
      {
        codeblock: generateCodeBlockForCustomerApi(
          'Retrieve the ID of the customer.',
          'id',
        ),
      },
    ],
  },
  category: 'APIs',
  related: [
    {
      name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCustomerDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-action-render',
    },
  ],
};

export default data;
