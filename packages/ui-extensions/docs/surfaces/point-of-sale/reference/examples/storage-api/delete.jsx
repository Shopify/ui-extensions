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
        await shopify.storage.set('key', 'A temporary value');
        const storedData = await shopify.storage.get('key');
        shopify.toast.show(`Current value: ${String(storedData)}`);
        setTimeout(async () => {
          await shopify.storage.delete('key');
          const storedData = (await shopify.storage.get('key')) ?? '';
          shopify.toast.show(`Current value after deletion: ${String(storedData)}`);
        }, 2000);
      }}
    />
  );
}