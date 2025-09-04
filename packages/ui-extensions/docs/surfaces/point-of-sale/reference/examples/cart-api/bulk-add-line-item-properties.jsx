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
        shopify.cart.bulkAddLineItemProperties([
          {
            lineItemUuid: 'aa-1234567',
            properties: {
              note: 'Handle with care',
              request: 'Gift wrap',
            },
          },
          {
            lineItemUuid: 'bb-7654321',
            properties: {
              color: 'Blue',
              size: 'Medium',
            },
          },
        ]);
      }}
    />
  );
};
