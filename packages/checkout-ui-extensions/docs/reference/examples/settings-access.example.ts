import {
  extend,
  Banner,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::Dynamic::Render',
  (root, {settings}) => {
    const banner = root.createComponent(Banner, {
      title: settings.current.banner_title,
    });

    // When the merchant updates the banner title in the checkout editor, re-render the banner
    settings.subscribe((newSettings) => {
      banner.updateProps({
        title: newSettings.banner_title,
      });
    });

    root.appendChild(banner);
  },
);
