import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [selected, setSelected] = useState(null);

  const currentProductId = data.selected[0]?.id;

  const handleSelectProducts = async () => {
    const selectedProducts = await shopify.resourcePicker({
      type: 'product',
      multiple: 5,
      action: 'select',
    });

    if (selectedProducts) {
      setSelected(selectedProducts);
      
      await fetch('/api/create-bundle', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          mainProduct: currentProductId,
          components: selectedProducts.map((p) => p.id),
        }),
      });
      
      shopify.close();
    }
  };

  return (
    <s-admin-action title="Create Bundle">
      <s-text>Main product: {currentProductId}</s-text>
      <s-button onClick={handleSelectProducts}>
        Select Component Products
      </s-button>
      {selected && <s-text>Selected {selected.length} products</s-text>}
    </s-admin-action>
  );
}
