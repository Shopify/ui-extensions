export default async () => {
  const banner =
    document.createElement('s-banner');

  banner.textContent = shopify.i18n.translate(
    'welcomeMessage',
  );

  document.body.append(banner);
}
