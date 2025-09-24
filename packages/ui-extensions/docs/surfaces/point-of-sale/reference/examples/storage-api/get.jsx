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
        const storedData = await shopify.storage.get('key');
        shopify.toast.show(String(storedData ?? ''));
      }}
    />
  );
}