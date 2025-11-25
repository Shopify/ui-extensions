import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
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
  defaultExample: {
    codeblock: generateCodeBlock(
      'Monitor cart changes in real time',
      'targets',
      'pos-cart-update-event-observe',
    ),
    description:
      'Subscribe to cart update events to respond to cart modifications automatically. This example demonstrates tracking cart changes for analytics, triggering workflows based on cart contents, or implementing dynamic pricing rules that react to line item additions or removals.',
  },
};

export default data;
