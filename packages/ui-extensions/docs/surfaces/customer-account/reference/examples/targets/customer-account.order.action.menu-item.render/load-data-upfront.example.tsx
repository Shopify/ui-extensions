import React from "react";
import {
  Button,
  reactExtension,
  useApi,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order.action.menu-item.render",
  async () => {
    const data = await fetchMenuItems();

    return <MenuActionItemExtension data={data}/>
  }
);

interface Props {
  data: any;
}

function MenuActionItemExtension(props: Props) {
  return <Button to={props.data.url}>{props.data.itemName}</Button>;
}

function fetchMenuItems() {
  throw new Error("Function not implemented.");
}

