import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const {id, name, customerId} = shopify.order;

  return (
    <s-page heading="Order Details">
      <s-scroll-box>
        <s-stack direction="block">
          <s-text>Order ID: {id}</s-text>
          <s-text>Order Name: {name}</s-text>
          {customerId ? (
            <s-text>Customer ID: {customerId}</s-text>
          ) : (
            <s-text>No customer associated with this order</s-text>
          )}
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
};



