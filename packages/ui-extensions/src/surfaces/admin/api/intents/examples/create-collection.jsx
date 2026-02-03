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
    
    const activity = await shopify.intents.invoke('create:shopify/Collection');
    const response = await activity.complete;

    setResult(response);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Create Collection">
      <s-button onClick={handleAction} disabled={loading}>
        {loading ? 'Creating...' : 'Launch Collection Creator'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">Collection created successfully!</s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Creation cancelled</s-text>
      )}
    </s-admin-block>
  );
}
