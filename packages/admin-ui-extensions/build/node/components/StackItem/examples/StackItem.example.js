"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const stack = root.createComponent(_adminUiExtensions.InlineStack);
  const stackItemFill = root.createComponent(_adminUiExtensions.StackItem, {
    fill: true
  });
  const stackItemText = root.createComponent(_adminUiExtensions.Text);
  stackItemText.appendChild('Fill the space');
  const stackItemNoFill = root.createComponent(_adminUiExtensions.StackItem);
  const text1 = root.createComponent(_adminUiExtensions.Text);
  text1.appendChild('Other text');
  const text2 = root.createComponent(_adminUiExtensions.Text);
  text2.appendChild('Even more text');
  stackItemFill.appendChild(stackItemText);
  stack.appendChild(stackItemFill);
  stackItemNoFill.appendChild(text1);
  stackItemNoFill.appendChild(text2);
  stack.appendChild(stackItemNoFill);
  root.appendChild(stack);
  root.mount();
});