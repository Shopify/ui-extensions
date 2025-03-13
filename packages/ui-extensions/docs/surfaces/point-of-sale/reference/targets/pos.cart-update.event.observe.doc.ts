import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
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
};

export default data;
