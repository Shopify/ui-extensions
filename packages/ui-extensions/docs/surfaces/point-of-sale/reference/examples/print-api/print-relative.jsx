import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My App"
      subheading="Print with relative path"
      onClick={async () => {
        // If your application_url is "https://my-app.com"
        // This will resolve to "https://my-app.com/api/print/document"
        await shopify.print.print('/api/print/document');
      }}
    />
  );
};
