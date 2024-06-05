import React from "react";
import {
  Banner,
  extension,
} from "@shopify/ui-extensions-react/customer-account";

export default extension(
  "customer-account.order-status.block.render",
  (root, api) => {
  const getCustomerNameQuery = {
    query: `query {
      customer {
        firstName
      }
    }`
  };

  fetch("shopify://customer-account/api/unstable/graphql.json",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getCustomerNameQuery),
    }).then((response) => response.json())
    .then(({data: {customer: {firstName}}}) => {
      if (firstName) {
        root.appendChild(root.createComponent(Banner, {}, `${api.i18n.translate('welcomeMsg', {name: firstName})}` ));
      }
    }).catch(console.error);
});
