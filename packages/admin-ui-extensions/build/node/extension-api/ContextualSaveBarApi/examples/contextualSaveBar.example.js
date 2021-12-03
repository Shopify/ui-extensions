"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Discounts::Create', (root, api) => {
  const {
    contextualSaveBar: {
      setVisible,
      setSaveAction,
      setDiscardAction
    }
  } = api;
  setSaveAction(() => console.log("Save content"));
  setDiscardAction(() => console.log("Discard content"));
  const button = root.createComponent(_adminUiExtensions.Button, {
    title: 'Show contextual save bar',
    primary: true,
    onPress: () => setVisible(true)
  });
  root.appendChild(button);
  const hideButton = root.createComponent(_adminUiExtensions.Button, {
    title: 'Hide contextual save bar',
    onPress: () => setVisible(false)
  });
  root.appendChild(hideButton);
  root.mount();
});