import React from "react";
import {
  extension,
  Button
} from "@shopify/ui-extensions-react/customer-account";

export default extension(
  "customer-account.order-status.block.render",
  (root, api) => {

    async function reportAnIssue() {
      await api.requireLogin();

      // send a request to backend
    }
    root.appendChild(
      root.createComponent(Button, {
        onPress: reportAnIssue
      }, "Report an issue"),
    );
});
