import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const resourceId = data.selected[0]?.id || 'gid://shopify/Collection/123456789';

  const handleAction = async () => {
    setLoading(true);
    
    const activity = await shopify.intents.invoke('edit:shopify/Collection', {
      value: resourceId,
    });
    
    const response = await activity.complete;
    setResult(response);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Edit Collection">
      <s-text>Editing: {resourceId}</s-text>
      <s-button onClick={handleAction} disabled={loading}>
        {loading ? 'Opening...' : 'Edit Collection'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">Collection updated!</s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Edit cancelled</s-text>
      )}
    </s-admin-block>
  );
}
