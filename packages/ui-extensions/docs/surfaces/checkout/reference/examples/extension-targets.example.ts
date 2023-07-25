import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

function renderExtension(root, {extension}) {
  root.appendChild(
    root.createComponent(
      Banner,
      {},
      `This extension is rendering in the ${extension.target} extension target.`,
    ),
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
