import React, { useEffect, useState } from "react";
import {
  Button,
  reactExtension,
  useApi,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order-status.block.render",
  () => <BlockExtension />
);

function BlockExtension() {
  const { requireLogin } = useApi<"customer-account.order-status.block.render">();

  async function reportAnIssue() {
    await requireLogin();

    // send a request to backend
  }
  return <Button onPress={reportAnIssue}>Report an issue</Button>;
}
