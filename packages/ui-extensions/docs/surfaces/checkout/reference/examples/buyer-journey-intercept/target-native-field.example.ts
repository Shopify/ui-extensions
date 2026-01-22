import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.delivery-address.render-before',
  (
    root,
    {buyerJourney, extension, shippingAddress},
  ) => {
    const banner = root.createComponent(
      Banner,
      {
        status: 'warning',
        title: 'This app may be misconfigured',
      },
      `To allow this app to block checkout, enable this behavior in "Checkout behavior" settings.`,
    );
    const editorType = extension.editor.type;

    let address = shippingAddress?.current;
    shippingAddress?.subscribe((newAddress) => {
      address = newAddress;
    });

    let blockProgressGranted =
      extension.capabilities.current.find(
        (capability) =>
          capability === 'block_progress',
      );
    extension.capabilities.subscribe(
      (newCapabilities) => {
        blockProgressGranted =
          newCapabilities.find(
            (capability) =>
              capability === 'block_progress',
          );

        if (
          editorType === 'checkout' &&
          !blockProgressGranted
        ) {
          root.appendChild(banner);
        } else {
          root.removeChild(banner);
        }
      },
    );

    buyerJourney.intercept(
      ({canBlockProgress}) => {
        return canBlockProgress &&
          address?.countryCode &&
          address.countryCode !== 'CA'
          ? {
              behavior: 'block',
              reason: 'Invalid shipping country',
              errors: [
                {
                  message:
                    'Sorry, we can only ship to Canada',
                  // Show an error underneath the country code field
                  target:
                    '$.cart.deliveryGroups[0].deliveryAddress.countryCode',
                },
                {
                  // In addition, show an error at the page level
                  message:
                    'Please use a different address.',
                },
              ],
            }
          : {
              behavior: 'allow',
            };
      },
    );
  },
);
