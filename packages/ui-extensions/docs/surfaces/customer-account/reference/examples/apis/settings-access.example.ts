export default async () => {
  const banner =
    document.createElement('s-banner');
  banner.textContent =
    shopify.settings.current.banner_title;

  // When the merchant updates the banner title in the checkout editor, re-render the banner
  shopify.settings.subscribe((newSettings) => {
    banner.textContent = newSettings.banner_title;
  });

  document.body.append(banner);
}
