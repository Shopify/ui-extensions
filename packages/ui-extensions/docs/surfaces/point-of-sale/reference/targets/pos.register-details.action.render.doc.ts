import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosRegisterDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from register details menu items. Use this target for complex register workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to cash drawer functionality through the Cash Drawer API and support workflows with multiple screens, navigation, and interactive components.',
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
