import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const {id, name, customerId} = shopify.draftOrder;

  return (
    <s-page heading="Draft Order Details">
      <s-scroll-box>
        <s-stack direction="block">
          <s-text>Draft Order ID: {id}</s-text>
          <s-text>Draft Order Name: {name}</s-text>
          {customerId ? (
            <s-text>Customer ID: {customerId}</s-text>
          ) : (
            <s-text>No customer associated with this draft order</s-text>
          )}
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
};



