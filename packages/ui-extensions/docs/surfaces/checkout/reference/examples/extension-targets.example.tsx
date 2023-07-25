import {
  reactExtension,
  Banner,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

function Extension() {
  const {extension} = useApi();

  return (
    <Banner>
      This extension is rendering in the {extension.target}
      extension target.
    </Banner>
  );
}

// You can export a single extension target per file

// ./Actions.jsx
export default reactExtension(
  'purchase.checkout.actions.render-before',
  () => <Extension />,
);

// ./Delivery.jsx
export default reactExtension(
  'purchase.checkout.delivery-address.render-before',
  () => <Extension />,
);

// ./ShippingOptions.jsx
export default reactExtension(
  'purchase.checkout.shipping-option-list.render-after',
  () => <Extension />,
);

// ./Block.jsx
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);
