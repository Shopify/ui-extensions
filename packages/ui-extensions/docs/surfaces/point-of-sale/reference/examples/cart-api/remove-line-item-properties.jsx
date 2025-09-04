import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My App"
      subheading="Call cart function"
      onClick={() => {
        shopify.cart.removeLineItemProperties('aa-1234567', ['note']);
      }}
    />
  );
};
