import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  getHookExample,
  getExample,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Delivery',
  description: `
  The APIs for interacting with delivery and shipping options.

  > > Tip: Not all extension targets implement all APIs. Check the documentation for the extension target you are using to see which APIs are available.
  `,
  overviewPreviewDescription:
    'The APIs for interacting with delivery and shipping options.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_DeliveryApi',
    },
    {
      title: 'useDeliveryGroup',
      description:
        'Returns the full expanded details of a delivery group and automatically re-renders your component when that delivery group changes.',
      type: 'UseDeliveryGroupGeneratedType',
    },
    {
      title: 'useDeliveryGroups',
      description:
        'Returns the current delivery groups for the checkout, and automatically re-renders your component when delivery address or delivery option selection changes.',
      type: 'UseDeliveryGroupsGeneratedType',
    },
    {
      title: 'Shipping Option',
      description:
        'This API object is provided to extensions registered for the `purchase.checkout.shipping-option-item.render-after` and `purchase.checkout.shipping-option-item.details.render` extension targets.',
      type: 'ShippingOptionItemApi',
    },
    {
      title: 'useShippingOptionTarget',
      description:
        'Returns the shipping option for the `purchase.checkout.shipping-option-item.render-after` and `purchase.checkout.shipping-option-item.details.render` attached extensions.',
      type: 'UseShippingOptionTargetGeneratedType',
    },
    {
      title: 'ShippingOptionListApi',
      description:
        'This API object is provided to extensions registered for the `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` extension targets.',
      type: 'ShippingOptionListApi',
    },
    {
      title: 'useDeliveryGroupTarget',
      description:
        'Returns the delivery group for the `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` attached extensions. This is deprecated, use `useDeliveryGroupListTarget()` instead.',
      type: 'UseDeliveryGroupTargetGeneratedType',
    },
    {
      title: 'useDeliveryGroupListTarget',
      description:
        'Returns the delivery group list for the `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` attached extensions.',
      type: 'UseDeliveryGroupListTargetGeneratedType',
    },
    {
      title: 'useDeliverySelectionGroups',
      description:
        'Returns the delivery selection groups for the `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` attached extensions.',
      type: 'UseDeliverySelectionGroupsGeneratedType',
    },
    {
      title: 'PickupPointListApi',
      description:
        'This API object is provided to extensions registered for the `purchase.checkout.pickup-point-list.render-after` and `purchase.checkout.pickup-point-list.render-after` extension target.',
      type: 'PickupPointListApi',
    },
    {
      title: 'PickupLocationListApi',
      description:
        'This API object is provided to extensions registered for the `purchase.checkout.pickup-location-list.render-after` and `purchase.checkout.pickup-location-list.render-after` extension target.',
      type: 'PickupLocationListApi',
    },
    {
      title: 'PickupLocationItemApi',
      description:
        'The API object provided to the `purchase.checkout.pickup-location-option-item.render-after` extension target.',
      type: 'PickupLocationItemApi',
    },
    {
      title: 'usePickupLocationOptionTarget',
      description:
        'Returns the pickup location option for `purchase.checkout.pickup-location-option-item.render-after` attached extensions.',
      type: 'UsePickupLocationOptionTargetGeneratedType',
    },
  ],
  defaultExample: getHookExample('delivery-group'),
  examples: {
    description:
      'Learn how to use the API with JavaScript (JS) and React. See [React Hooks](../react-hooks) for all available hooks.',
    examples: [
      getExample('shipping-option-item/default', ['jsx', 'js']),
      getExample(
        'purchase.checkout.pickup-location-option-item.render-after/default',
        ['jsx', 'js'],
      ),
      getExample('pickup-point-list/default', ['jsx', 'js']),
      getHookExample('delivery-groups'),
    ],
  },
  related: getLinksByTag('apis'),
};

export default data;
