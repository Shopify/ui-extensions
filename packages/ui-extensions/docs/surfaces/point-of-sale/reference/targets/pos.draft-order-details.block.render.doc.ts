import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsBlockRender,
  description:
    'Renders a custom information section within the draft order details screen. Use this target for displaying supplementary order information like processing status, payment status, or workflow indicators alongside standard draft order details.' +
    '\n\nExtensions at this target appear as persistent blocks within the draft order interface and support interactive elements that can launch modal workflows using `api.action.presentModal()` for more complex draft order operations.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Add a draft order details block',
      'targets',
      'pos-draft-order-details-block-render',
    ),
    description:
      'Display custom information within the draft order details screen as a persistent block. This example shows how to create blocks that show supplementary order information like processing status, payment status, or workflow indicators with interactive elements.',
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
      name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-draft-order-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
