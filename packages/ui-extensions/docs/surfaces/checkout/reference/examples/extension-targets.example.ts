import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

// You can support multiple static extension targets
const checkoutActions = extension(
  'Checkout::Actions::RenderBefore',
  renderExtension,
);
const deliveryAddress = extension(
  'Checkout::DeliveryAddress::RenderBefore',
  renderExtension,
);
const shippingMethods = extension(
  'Checkout::ShippingMethods::RenderAfter',
  renderExtension,
);

// You can also support a dynamic extension target which can be moved by the merchant
const dynamic = extension(
  'Checkout::Dynamic::Render',
  renderExtension,
);

export {
  checkoutActions,
  deliveryAddress,
  shippingMethods,
  dynamic,
};

function renderExtension(
  root,
  {extension: {target}},
) {
  root.appendChild(
    root.createComponent(Banner, {
      title: `This extension is rendering in the ${target} extension target.`,
    }),
  );
}
