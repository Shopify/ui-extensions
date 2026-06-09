import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [result, setResult] = useState(null);
  const [editing, setEditing] = useState(false);

  const productId = data.selected[0]?.id || 'gid://shopify/Product/123456789';

  const handleEdit = async () => {
    setEditing(true);
    
    const activity = await shopify.intents.invoke('edit:shopify/Product', {
      value: productId,
    });
    
    const response = await activity.complete;
    setResult(response);
    setEditing(false);
  };

  return (
    <s-admin-block heading="Edit Product">
      <s-text>Product: {productId}</s-text>
      <s-button onClick={handleEdit} disabled={editing}>
        {editing ? 'Opening...' : 'Edit Product'}
      </s-button>
      {result?.code === 'ok' && (
        <s-banner status="success">Product updated!</s-banner>
      )}
      {result?.code === 'closed' && (
        <s-text>Edit cancelled</s-text>
      )}
    </s-admin-block>
  );
}
