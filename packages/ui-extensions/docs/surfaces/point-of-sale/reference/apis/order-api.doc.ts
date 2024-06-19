import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description:
    'The Order API provides an extension with data about the current order.',
  isVisualComponent: false,
  type: 'APIs',
  requires:
    ExtensionTargetType.PosPurchasePostActionMenuItemRender ||
    ExtensionTargetType.PosPurchasePostActionRender ||
    ExtensionTargetType.PosOrderDetailsActionMenuItemRender ||
    ExtensionTargetType.PosOrderDetailsActionRender,
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
