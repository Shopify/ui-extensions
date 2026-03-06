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

    const activity = await shopify.intents.invoke('edit:settings/LocationDefault');
    const response = await activity.complete;

    setResult(response);
    setLoading(false);
  };

  return (
    <s-admin-block heading="Edit Default Location">
      <s-button onClick={handleAction} disabled={loading}>
        {loading ? 'Editing...' : 'Launch Default Location Editor'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">Settings updated</s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Edit default location cancelled</s-text>
      )}
    </s-admin-block>
  );
}
