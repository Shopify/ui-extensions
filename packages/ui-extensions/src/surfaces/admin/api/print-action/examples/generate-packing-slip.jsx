import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;

  const handleGenerate = async () => {
    const orderIds = data.selected.map((item) => item.id);

    const response = await fetch('/api/generate-packing-slip', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({orderIds}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  };

  return (
    <s-admin-print-action onPrint={handleGenerate}>
      <s-text>Generating packing slip for {data.selected.length} orders</s-text>
    </s-admin-print-action>
  );
}
