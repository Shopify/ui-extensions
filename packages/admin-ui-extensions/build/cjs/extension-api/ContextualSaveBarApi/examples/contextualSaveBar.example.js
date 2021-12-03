"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Discounts::Create', function (root, api) {
  var _api$contextualSaveBa = api.contextualSaveBar,
      setVisible = _api$contextualSaveBa.setVisible,
      setSaveAction = _api$contextualSaveBa.setSaveAction,
      setDiscardAction = _api$contextualSaveBa.setDiscardAction;
  setSaveAction(function () {
    return console.log("Save content");
  });
  setDiscardAction(function () {
    return console.log("Discard content");
  });
  var button = root.createComponent(_adminUiExtensions.Button, {
    title: 'Show contextual save bar',
    primary: true,
    onPress: function onPress() {
      return setVisible(true);
    }
  });
  root.appendChild(button);
  var hideButton = root.createComponent(_adminUiExtensions.Button, {
    title: 'Hide contextual save bar',
    onPress: function onPress() {
      return setVisible(false);
    }
  });
  root.appendChild(hideButton);
  root.mount();
});