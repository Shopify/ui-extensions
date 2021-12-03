"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

function buildStackText(root) {
  var text = root.createComponent(_adminUiExtensions.Text);
  text.appendChild('Items to stack');
  return text;
}

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var inlineStack = root.createComponent(_adminUiExtensions.InlineStack, {
    inlineAlignment: 'center',
    spacing: 'loose'
  });
  inlineStack.appendChild(buildStackText(root));
  inlineStack.appendChild(buildStackText(root));
  inlineStack.appendChild(buildStackText(root));
  root.appendChild(inlineStack);
  root.mount();
});