import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const resourceId = data.selected[0]?.id || 'gid://shopify/Customer/123456789';

  const handleAction = async () => {
    setLoading(true);
    
    const activity = await shopify.intents.invoke('edit:shopify/Customer', {
      value: resourceId,
    });
    
    const response = await activity.complete;
    setResult(response);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Edit Customer">
      <s-text>Editing: {resourceId}</s-text>
      <s-button onClick={handleAction} disabled={loading}>
        {loading ? 'Opening...' : 'Edit Customer'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">Customer updated!</s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Edit cancelled</s-text>
      )}
    </s-admin-block>
  );
}
