import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFulfill = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const orderId = data.selected[0]?.id;
      
      const response = await fetch(`/api/orders/${orderId}/fulfill`, {
        method: 'POST',
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Fulfillment failed');
      }
      
      console.log('Order fulfilled:', result);
      shopify.close();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <s-admin-action title="Fulfill Order">
      {error && <s-banner status="critical">{error}</s-banner>}
      <s-button onClick={handleFulfill} disabled={loading}>
        {loading ? 'Fulfilling...' : 'Fulfill Order'}
      </s-button>
    </s-admin-action>
  );
}
