"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const banner = root.createComponent(_adminUiExtensions.Banner, {
    action: {
      onAction: () => console.log('Pressed the action'),
      content: 'Press me'
    },
    status: 'warning',
    title: 'This is a warning',
    onDismiss: () => console.log('Closed')
  });
  const bannerText = root.createComponent(_adminUiExtensions.Text);
  bannerText.appendChild('Here is the warning.');
  banner.appendChild(bannerText);
  root.appendChild(banner);
  root.mount();
});