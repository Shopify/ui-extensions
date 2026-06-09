import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const resourceId = data.selected[0]?.id || 'gid://shopify/Market/123456789';

  const handleAction = async () => {
    setLoading(true);
    
    const activity = await shopify.intents.invoke('edit:shopify/Market', {
      value: resourceId,
    });
    
    const response = await activity.complete;
    setResult(response);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Edit Market">
      <s-text>Editing: {resourceId}</s-text>
      <s-button onClick={handleAction} disabled={loading}>
        {loading ? 'Opening...' : 'Edit Market'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">Market updated!</s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Edit cancelled</s-text>
      )}
    </s-admin-block>
  );
}
