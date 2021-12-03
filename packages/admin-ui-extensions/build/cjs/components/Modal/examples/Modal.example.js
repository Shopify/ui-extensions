"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var modal = root.createComponent(_adminUiExtensions.Modal, {
    title: 'The best modal',
    onClose: function onClose() {
      return console.log('modal closed!');
    },
    open: true
  });
  modal.appendChild('This is the content of the modal.');
  root.appendChild(modal);
  root.mount();
});