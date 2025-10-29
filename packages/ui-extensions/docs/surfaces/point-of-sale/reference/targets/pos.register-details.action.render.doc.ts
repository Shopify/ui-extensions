import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosRegisterDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.register-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Register Details Action',
      'targets',
      'pos-register-details-action-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosRegisterDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/register-details/pos-register-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosRegisterDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/register-details/pos-register-details-block-render',
    },
  ],
  type: 'Target',
};
export default data;
