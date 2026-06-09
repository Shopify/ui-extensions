import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [result, setResult] = useState(null);
  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    setCreating(true);
    
    const activity = await shopify.intents.invoke('create:shopify/Product');
    const response = await activity.complete;

    setResult(response);
    setCreating(false);
  };

  return (
    <s-admin-block heading="Create Product">
      <s-button onClick={handleCreate} disabled={creating}>
        {creating ? 'Creating...' : 'Launch Product Creator'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">
          Product created: {result.data?.product?.id}
        </s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Creation cancelled</s-text>
      )}
    </s-admin-block>
  );
}
