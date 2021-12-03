"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const pressable = root.createComponent(_adminUiExtensions.Pressable, {
    onPress: () => console.log('I’ve been pressed!')
  });
  const pressableText = root.createComponent(_adminUiExtensions.Text);
  pressableText.appendChild('I can be pressed');
  pressable.appendChild(pressableText);
  root.appendChild(pressable);
  root.mount();
});