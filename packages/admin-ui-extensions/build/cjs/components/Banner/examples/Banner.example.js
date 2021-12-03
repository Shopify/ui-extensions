"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var banner = root.createComponent(_adminUiExtensions.Banner, {
    action: {
      onAction: function onAction() {
        return console.log('Pressed the action');
      },
      content: 'Press me'
    },
    status: 'warning',
    title: 'This is a warning',
    onDismiss: function onDismiss() {
      return console.log('Closed');
    }
  });
  var bannerText = root.createComponent(_adminUiExtensions.Text);
  bannerText.appendChild('Here is the warning.');
  banner.appendChild(bannerText);
  root.appendChild(banner);
  root.mount();
});