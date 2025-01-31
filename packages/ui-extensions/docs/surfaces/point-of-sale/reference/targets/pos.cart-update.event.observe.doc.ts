import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartUpdateObserve,
  description: 'An event extension target that observes cart updates',
  category: 'Targets',
  subCategory: 'Cart details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
