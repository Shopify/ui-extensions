import React, { useEffect, useState } from "react";
import {
  Banner,
  reactExtension,
  useTranslate,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order-status.block.render",
  () => <BlockExtension />
);

function BlockExtension() {
  const [customerName, setCustomerName] = useState("");
  const translate = useTranslate();
  const getCustomerNameQuery = {
    query: `query {
      customer {
        firstName
      }
    }`
  };

  useEffect(() => {
    fetch("shopify://customer-account/api/unstable/graphql.json",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getCustomerNameQuery),
      }).then((response) => response.json())
      .then(({data: { customer: {firstName}}}) => {
        setCustomerName(firstName)
      }).catch(console.error);
  });

  return customerName ? (
    <Banner>{translate('welcomeMsg', {name: customerName})}</Banner>
  ): null;
}
