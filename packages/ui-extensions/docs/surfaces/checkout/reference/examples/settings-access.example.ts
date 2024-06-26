import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
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
