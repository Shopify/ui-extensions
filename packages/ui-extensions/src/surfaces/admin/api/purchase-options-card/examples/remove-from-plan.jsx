import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [confirming, setConfirming] = useState(false);
  const [removed, setRemoved] = useState(false);

  const {id: productId, sellingPlanId} = data.selected[0];

  const handleRemove = async () => {
    setConfirming(false);
    
    await fetch('/api/selling-plans/remove-product', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productId, sellingPlanId}),
    });

    setRemoved(true);
    setTimeout(() => shopify.close(), 1500);
  };

  return (
    <s-admin-action title="Remove from Selling Plan">
      {!confirming ? (
        <s-button onClick={() => setConfirming(true)}>
          Remove Product
        </s-button>
      ) : (
        <>
          <s-text>Are you sure you want to remove this product?</s-text>
          <s-button onClick={handleRemove}>Confirm Remove</s-button>
          <s-button onClick={() => setConfirming(false)}>Cancel</s-button>
        </>
      )}
      {removed && <s-banner status="success">Product removed from plan</s-banner>}
    </s-admin-action>
  );
}
