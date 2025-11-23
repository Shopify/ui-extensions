import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosRegisterDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the register details action menu. Use this target for register-specific operations like cash drawer management, shift reports, or launching cash reconciliation workflows.' +
    '\n\nExtensions at this target can access cash drawer functionality through the Cash Drawer API to perform register-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion modal for complete register workflows.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a register details action menu item',
      'targets',
      'pos-register-details-action-menu-item-render',
    ),
    description:
      'Add an interactive menu item to the register details action menu for register-specific operations. This example shows how to create a menu item that accesses register data and launches modal workflows for tasks like cash management, shift reporting, or register configuration.',
  },
  category: 'Targets',
  subCategory: 'Register details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosRegisterDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/register-details/pos-register-details-action-render',
    },
    {
      name: ExtensionTargetType.PosRegisterDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/register-details/pos-register-details-block-render',
    },
  ],
  type: 'Target',
};
export default data;
