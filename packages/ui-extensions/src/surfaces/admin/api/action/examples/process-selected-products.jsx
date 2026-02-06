import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;

  const handleProcess = async () => {
    const productIds = data.selected.map((item) => item.id);

    const response = await fetch('/api/bulk-process', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productIds}),
    });

    if (response.ok) {
      console.log('Products processed successfully');
      shopify.close();
    } else {
      console.error('Failed to process products');
    }
  };

  return (
    <s-admin-action title="Bulk Process">
      <s-text>Processing {data.selected.length} products</s-text>
      <s-button onClick={handleProcess}>Process Products</s-button>
    </s-admin-action>
  );
}
