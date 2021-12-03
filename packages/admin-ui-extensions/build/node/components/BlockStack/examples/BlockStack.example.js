"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

function buildStackText(root) {
  const text = root.createComponent(_adminUiExtensions.Text);
  text.appendChild('Items to stack');
  return text;
}

(0, _adminUiExtensions.extend)('Playground', root => {
  const blockStack = root.createComponent(_adminUiExtensions.BlockStack, {
    inlineAlignment: 'center',
    spacing: 'loose'
  });
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  root.appendChild(blockStack);
  root.mount();
});