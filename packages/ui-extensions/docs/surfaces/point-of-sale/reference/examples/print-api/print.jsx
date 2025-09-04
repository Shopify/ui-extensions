import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My app"
      subheading="Hello world!"
      onClick={() => {
        shopify.print.print('documents/test-print');
      }}
    />
  );
};
