import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [selected, setSelected] = useState([]);

  const parentProductId = data.selected[0]?.id;

  const handleSelectComponents = async () => {
    const componentProducts = await shopify.resourcePicker({
      type: 'product',
      multiple: 5,
      action: 'select',
      filter: {
        draft: false,
        archived: false,
      },
    });

    if (componentProducts) {
      setSelected(componentProducts);
      
      await fetch('/api/bundles/configure', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          bundleProductId: parentProductId,
          components: componentProducts.map((p) => ({
            productId: p.id,
            quantity: 1,
          })),
        }),
      });
    }
  };

  return (
    <s-admin-block heading="Bundle Configuration">
      <s-button onClick={handleSelectComponents}>Select Components</s-button>
      {selected.length > 0 && (
        <s-text>{selected.length} components selected</s-text>
      )}
    </s-admin-block>
  );
}
