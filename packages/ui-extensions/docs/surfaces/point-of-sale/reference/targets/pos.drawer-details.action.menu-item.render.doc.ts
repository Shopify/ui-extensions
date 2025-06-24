import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDrawerDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the drawer details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Drawer details action menu item',
      'targets',
      'pos-drawer-details-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Drawer details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosDrawerDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-action-render',
    },
    {
      name: ExtensionTargetType.PosDrawerDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
