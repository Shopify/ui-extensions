import React from "react";
import {
  Button,
  CustomerAccountAction,
  TextBlock,
  reactExtension,
  useApi,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order.action.render",
  ( ) => <MenuActionExtension />
);

function MenuActionExtension( ) {
  const api = useApi<"customer-account.order.action.render">()
  const translate = api.i18n.translate;

  return (
    <CustomerAccountAction
      title={translate("menuAction.title")}
      primaryAction={
        <Button
          onPress={() => {
            api.close();
          }}
        >
          {translate("menuAction.primaryAction")}
        </Button>
      }
    >
      <TextBlock>{translate("menuAction.content")}</TextBlock>
    </CustomerAccountAction>
  );
}
