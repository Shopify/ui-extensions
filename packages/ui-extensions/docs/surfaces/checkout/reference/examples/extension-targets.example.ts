import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

function extension(root, {extension: {target}}) {
  root.appendChild(
    root.createComponent(Banner, {
      title: `This extension is rendering in the ${target} extension target.`,
    }),
  );
}

// You can export single a extension target per file

// ./Actions.jsx
export default extension(
  'purchase.checkout.actions.render-before',
  renderExtension,
);

// ./Delivery.jsx
export default extension(
  'purchase.checkout.delivery-address.render-before',
  renderExtension,
);

// ./ShippingOptions.jsx
export default extension(
  'purchase.checkout.shipping-option-list.render-after',
  renderExtension,
);

// ./Block.jsx
export default extension(
  'purchase.checkout.block.render',
  renderExtension,
);
