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
        await shopify.storage.set('attempts', 2);
        await shopify.storage.set('darkMode', true);
        await shopify.storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3');

        const allEntries = await shopify.storage.entries();
        const message = allEntries.length
          ? allEntries.map(([key, value]) => `${key}: ${value}`).join(', ')
          : 'Nothing stored';

        shopify.toast.show(message);
      }}
    />
  );
}