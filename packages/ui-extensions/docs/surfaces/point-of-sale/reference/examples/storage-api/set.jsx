import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-tile
      heading="POS smart grid"
      subheading="preact Extension"
      onClick={async () => {
        await Promise.all([
          shopify.storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3'),
          shopify.storage.set('someObject', {
            boolean: true,
            numeric: 2,
            string: 'Hello world!',
          }),
          shopify.storage.set('attempts', 2),
        ]);
        shopify.toast.show('Data stored');
      }}
    />
  );
}