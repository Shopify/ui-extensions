import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartUpdateObserve,
  description:
    'Observes cart updates during active transactions, triggering whenever merchants add, remove, or modify line items. Use this target for real-time responses to cart changes like dynamic pricing, inventory validation, or promotional offer applications based on current cart contents.' +
    '\n\nExtensions at this target receive complete cart data including line items, totals, discounts, and customer information whenever the cart state changes.',
  category: 'Targets',
  subCategory: 'Cart details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
  definitions: [CUSTOM_DATA('CartUpdateEventData')],
};

export default data;
