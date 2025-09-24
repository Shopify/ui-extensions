import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const initializeData = async () => {
      const count = 10;
      for (let i = 0; i < count; i++) {
        await shopify.storage.set(`key-${i}`, `value-${i}`);
      }
      setItemCount(count);
    };

    initializeData();
  }, []);

  return (
    <s-tile
      heading="POS smart grid"
      subheading="preact Extension"
      itemCount={itemCount}
      onClick={async () => {
        await shopify.storage.clear();
        shopify.toast.show('All data cleared');
        setItemCount(0);
      }}
    />
  );
}