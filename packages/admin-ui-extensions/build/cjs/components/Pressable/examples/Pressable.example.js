"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var pressable = root.createComponent(_adminUiExtensions.Pressable, {
    onPress: function onPress() {
      return console.log('I’ve been pressed!');
    }
  });
  var pressableText = root.createComponent(_adminUiExtensions.Text);
  pressableText.appendChild('I can be pressed');
  pressable.appendChild(pressableText);
  root.appendChild(pressable);
  root.mount();
});