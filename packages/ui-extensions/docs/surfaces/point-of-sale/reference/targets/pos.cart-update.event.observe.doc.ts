import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartUpdateObserve,
  description: `An event extension target that observes cart updates
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  category: 'Targets',
  subCategory: 'Cart details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  definitions: [CUSTOM_DATA('CartUpdateEventData')],
};

export default data;
