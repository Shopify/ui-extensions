import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDrawerDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.drawer-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Drawer details action',
      'targets',
      'pos-drawer-details-action-render',
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
      name: ExtensionTargetType.PosDrawerDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
