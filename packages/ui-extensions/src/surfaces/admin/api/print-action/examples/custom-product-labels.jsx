import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [additionalCount, setAdditionalCount] = useState(0);

  const handleSelectMore = async () => {
    const additionalProducts = await shopify.resourcePicker({
      type: 'product',
      multiple: 10,
      action: 'add',
    });

    if (additionalProducts) {
      setAdditionalCount(additionalProducts.length);
    }
  };

  const handleGenerate = async () => {
    const productIds = data.selected.map((item) => item.id);
    
    const response = await fetch('/api/generate-labels', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productIds}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  };

  return (
    <s-admin-print-action onPrint={handleGenerate}>
      <s-text>{data.selected.length} products selected</s-text>
      <s-button onClick={handleSelectMore}>Add More Products</s-button>
      {additionalCount > 0 && <s-text>+{additionalCount} additional</s-text>}
    </s-admin-print-action>
  );
}
