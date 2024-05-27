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
    ExtensionTargetType.PosPurchasePostActionRender,
  definitions: [
    {
      title: 'OrderApi',
      description: '',
      type: 'OrderAPIContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
