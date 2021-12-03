"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

function buildInlineText(root) {
  var text = root.createComponent(_adminUiExtensions.Text);
  text.appendChild('Inline text');
  return text;
}

function buildStackText(root) {
  var text = root.createComponent(_adminUiExtensions.Text);
  text.appendChild('Items to stack');
  return text;
}

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var vStack = root.createComponent(_adminUiExtensions.Stack, {
    vertical: true
  });
  var hStack = root.createComponent(_adminUiExtensions.Stack, {
    distribution: 'center',
    alignment: 'fill',
    spacing: 'loose',
    wrap: false
  });
  hStack.appendChild(buildInlineText(root));
  hStack.appendChild(buildInlineText(root));
  hStack.appendChild(buildInlineText(root));
  vStack.appendChild(hStack);
  vStack.appendChild(buildStackText(root));
  vStack.appendChild(buildStackText(root));
  vStack.appendChild(buildStackText(root));
  root.appendChild(vStack);
  root.mount();
});