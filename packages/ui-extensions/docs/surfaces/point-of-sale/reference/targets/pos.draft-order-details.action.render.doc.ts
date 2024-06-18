import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.draft-order-details.action.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Draft order details action',
      'targets',
      'pos-draft-order-details-action',
    ),
  },
  category: 'Targets',
  subCategory: 'Draft order details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-draft-order-details-action-menu-item-render',
    },
    {
      name: 'Draft order details API',
      url: '/docs/api/pos-ui-extensions/apis/draft-order-api',
    },
  ],
  type: 'Target',
};

export default data;
