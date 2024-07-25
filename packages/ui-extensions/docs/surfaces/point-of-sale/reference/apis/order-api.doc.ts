import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description: `
The Order API provides an extension with data about the current order.

#### Supporting targets
- ${TargetLink.PosPurchasePostActionMenuItemRender}
- ${TargetLink.PosPurchasePostActionRender}
- ${TargetLink.PosPurchasePostBlockRender}
- ${TargetLink.PosOrderDetailsActionMenuItemRender}
- ${TargetLink.PosOrderDetailsActionRender}
- ${TargetLink.PosOrderDetailsBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'OrderApi',
      description: '',
      type: 'OrderApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
