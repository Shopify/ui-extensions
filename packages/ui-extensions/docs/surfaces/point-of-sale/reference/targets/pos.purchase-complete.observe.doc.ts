import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
  description: 'An event extension target that observes completed checkouts',
  category: 'Targets',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
