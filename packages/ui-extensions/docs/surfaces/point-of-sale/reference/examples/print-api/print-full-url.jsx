import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My App"
      subheading="Print with full URL"
      onClick={async () => {
        // Using a full URL directly
        await shopify.print.print('https://my-print-service.com/api/print/document');
      }}
    />
  );
};
