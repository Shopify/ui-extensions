import {extend, CalloutBanner, Text} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const calloutBanner = root.createComponent(
    CalloutBanner,
    {title: 'Special offer today only'},
    [
      root.createComponent(
        Text,
        undefined,
        'Add the Dinghy Skeleton Cruiser to your order and save 15%',
      ),
    ],
  );

  root.appendChild(calloutBanner);
});
