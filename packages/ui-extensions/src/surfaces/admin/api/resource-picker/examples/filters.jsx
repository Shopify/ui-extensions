import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [selected, setSelected] = useState(null);

  const handlePick = async () => {
    const result = await shopify.resourcePicker({
      type: 'product',
      filter: {
        published_status: 'published',
      },
    });
    setSelected(result);
  };

  return (
    <s-admin-block heading="Resource Picker">
      <s-button onClick={handlePick}>Select Published Products</s-button>
      {selected && <s-text>{selected.length} products selected</s-text>}
    </s-admin-block>
  );
}
