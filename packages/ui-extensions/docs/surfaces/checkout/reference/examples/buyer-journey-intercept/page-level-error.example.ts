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
                  // An error without a `target` property is shown at page level
                  message:
                    'Sorry, we can only ship to Canada',
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
