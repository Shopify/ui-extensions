import { extend, Button } from '@shopify/admin-ui-extensions';
extend('Admin::Discounts::Create', function (root, api) {
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
  var button = root.createComponent(Button, {
    title: 'Show contextual save bar',
    primary: true,
    onPress: function onPress() {
      return setVisible(true);
    }
  });
  root.appendChild(button);
  var hideButton = root.createComponent(Button, {
    title: 'Hide contextual save bar',
    onPress: function onPress() {
      return setVisible(false);
    }
  });
  root.appendChild(hideButton);
  root.mount();
});