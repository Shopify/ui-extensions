import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

// You can support multiple static extension points
extension(
  'Checkout::Actions::RenderBefore',
  extension,
);
extension(
  'Checkout::DeliveryAddress::RenderBefore',
  extension,
);
extension(
  'Checkout::ShippingMethods::RenderAfter',
  extension,
);

// You can also support a dynamic extension point which can be moved by the merchant
extension('Checkout::Dynamic::Render', extension);

function extension(root, {extensionPoint}) {
  root.appendChild(
    root.createComponent(Banner, {
      title: `This extension is rendering in the ${extensionPoint} extension point.`,
    }),
  );
}
