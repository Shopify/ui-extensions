import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDrawerDetailsBlockRender,
  description:
    'Renders a custom section within the native drawer details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-drawer-details-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Drawer details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDrawerDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosDrawerDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
