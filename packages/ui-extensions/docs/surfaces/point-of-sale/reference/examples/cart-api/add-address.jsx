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
        shopify.cart.addAddress({
          address1: '123 Main St',
          city: 'Ottawa',
          province: 'Ontario',
          zip: 'K1S 5B6',
          firstName: 'John',
          lastName: 'Doe',
          country: 'Canada',
          phone: '555-1234',
        });
      }}
    />
  );
};
