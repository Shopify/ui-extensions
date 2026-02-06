import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [created, setCreated] = useState(null);

  const handleCreate = async () => {
    const activity = await shopify.intents.invoke('create:shopify/Product');
    const response = await activity.complete;

    if (response.code === 'ok') {
      const newProductId = response.data?.product?.id;
      setCreated(newProductId);
    }
  };

  return (
    <s-admin-block heading="Add Component">
      <s-button onClick={handleCreate}>Create New Component Product</s-button>
      {created && <s-text>Component created: {created}</s-text>}
    </s-admin-block>
  );
}
