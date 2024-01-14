import React from "react";
import {
  Button,
  reactExtension,
  useApi,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order.action.menu-item.render",
  () => <MenuActionItemExtension />
);

function MenuActionItemExtension() {
  const {i18n} = useApi<"customer-account.order.action.menu-item.render">()
  return <Button>{i18n.translate("menuItem.button")}</Button>;
}
