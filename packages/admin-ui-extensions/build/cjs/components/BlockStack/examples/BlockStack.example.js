"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

function buildStackText(root) {
  var text = root.createComponent(_adminUiExtensions.Text);
  text.appendChild('Items to stack');
  return text;
}

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var blockStack = root.createComponent(_adminUiExtensions.BlockStack, {
    inlineAlignment: 'center',
    spacing: 'loose'
  });
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  root.appendChild(blockStack);
  root.mount();
});