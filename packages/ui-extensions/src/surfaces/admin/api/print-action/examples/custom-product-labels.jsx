import {render} from 'preact';
import {useState, useCallback} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [additionalProducts, setAdditionalProducts] = useState([]);
  const [printUrl, setPrintUrl] = useState(null);

  const handleSelectMore = async () => {
    const picked = await shopify.resourcePicker({
      type: 'product',
      multiple: 10,
      action: 'add',
    });

    if (picked) {
      setAdditionalProducts((prev) => [...prev, ...picked]);
    }
  };

  const handleGenerate = useCallback(async () => {
    const selectedIds = data.selected.map((item) => item.id);
    const additionalIds = additionalProducts.map((item) => item.id);
    const productIds = [...selectedIds, ...additionalIds];

    const response = await fetch('/api/generate-labels', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productIds}),
    });

    const {printUrl: url} = await response.json();
    setPrintUrl(url);
  }, [data, additionalProducts]);

  return (
    <s-admin-print-action src={printUrl}>
      <s-text>{data.selected.length + additionalProducts.length} products selected</s-text>
      <s-button onClick={handleSelectMore}>Add More Products</s-button>
      <s-button onClick={handleGenerate}>Generate Labels</s-button>
    </s-admin-print-action>
  );
}
