import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [printUrl, setPrintUrl] = useState(null);

  useEffect(() => {
    const generateSlip = async () => {
      const orderIds = data.selected.map((item) => item.id);

      const response = await fetch('/api/generate-packing-slip', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({orderIds}),
      });

      const {printUrl: url} = await response.json();
      setPrintUrl(url);
    };

    generateSlip();
  }, [data]);

  return (
    <s-admin-print-action src={printUrl}>
      <s-text>Packing slip for {data.selected.length} orders</s-text>
    </s-admin-print-action>
  );
}
