import {extend} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::ShippingMethods::RenderBefore',
  (root, {deliveryGroupId, deliveryGroups}) => {
    const deliveryGroupAttached = deliveryGroups.current.find(({id}) => deliveryGroupId === id);

    const titleText = root.createText(
      `Delivery group type: ${deliveryGroupAttached.groupType}`,
    );
    root.appendChild(titleText);
  },
);
