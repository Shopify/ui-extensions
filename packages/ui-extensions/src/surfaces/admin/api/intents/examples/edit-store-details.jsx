import { render } from 'preact';
import { useState } from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);

    const activity = await shopify.intents.invoke('edit:settings/StoreDetails');
    const response = await activity.complete;

    setResult(response);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Edit Store Details">
      <s-button onClick={handleAction} disabled={loading}>
        {loading ? 'Editing...' : 'Launch Store Details Editor'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">
          Store details updated successfully!
        </s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Edit store details cancelled</s-text>
      )}
    </s-admin-block>
  );
}
