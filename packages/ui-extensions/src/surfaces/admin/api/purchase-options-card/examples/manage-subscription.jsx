import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [updated, setUpdated] = useState(false);

  const {id: productId, sellingPlanId} = data.selected[0];

  const handleUpdate = async () => {
    if (!sellingPlanId) {
      console.error('No selling plan selected');
      shopify.close();
      return;
    }

    const response = await fetch('/api/subscriptions/update', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        productId,
        sellingPlanId,
        action: 'modify',
      }),
    });

    if (response.ok) {
      setUpdated(true);
      setTimeout(() => shopify.close(), 1500);
    }
  };

  return (
    <s-admin-action title="Manage Subscription">
      <s-text>Product: {productId}</s-text>
      <s-text>Selling Plan: {sellingPlanId}</s-text>
      <s-button onClick={handleUpdate}>Update Subscription</s-button>
      {updated && <s-banner status="success">Subscription updated!</s-banner>}
    </s-admin-action>
  );
}
