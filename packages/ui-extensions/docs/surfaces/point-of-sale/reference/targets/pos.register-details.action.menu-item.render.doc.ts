import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosRegisterDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the register details screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Register Details Action Menu Item',
      'targets',
      'pos-register-details-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
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
