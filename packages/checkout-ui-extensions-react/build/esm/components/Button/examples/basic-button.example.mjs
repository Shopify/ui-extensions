import { render, useExtensionApi, Button } from '@shopify/checkout-ui-extensions-react';
import { jsx as _jsx } from "react/jsx-runtime";
render('Checkout::Feature::Render', function () {
  return /*#__PURE__*/_jsx(App, {});
});

function App() {
  var _useExtensionApi = useExtensionApi(),
      extensionPoint = _useExtensionApi.extensionPoint;

  return /*#__PURE__*/_jsx(Button, {
    onPress: function onPress() {
      // eslint-disable-next-line no-console
      console.log("Extension point: ".concat(extensionPoint));
    },
    children: "Log extension point to console"
  });
}