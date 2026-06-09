import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);
    
    const activity = await shopify.intents.invoke('create:shopify/ProductVariant');
    const response = await activity.complete;

    setResult(response);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Create Product Variant">
      <s-button onClick={handleAction} disabled={loading}>
        {loading ? 'Creating...' : 'Launch Product Variant Creator'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">Product Variant created successfully!</s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Creation cancelled</s-text>
      )}
    </s-admin-block>
  );
}
