import {
  extend,
  Banner,
} from '@shopify/checkout-ui-extensions';

// You can support multiple static extension points
extend(
  'Checkout::Actions::RenderBefore',
  extension,
);
extend(
  'Checkout::DeliveryAddress::RenderBefore',
  extension,
);
extend(
  'Checkout::ShippingMethods::RenderAfter',
  extension,
);

// You can also support a dynamic extension point which can be moved by the merchant
extend('Checkout::Dynamic::Render', extension);

function extension(root, {extensionPoint}) {
  root.appendChild(
    root.createComponent(Banner, {
      title: `This extension is rendering in the ${extensionPoint} extension point.`,
    }),
  );
}
