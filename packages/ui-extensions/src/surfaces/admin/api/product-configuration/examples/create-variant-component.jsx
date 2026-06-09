import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [created, setCreated] = useState(null);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    const getParentProduct = async () => {
      const variantId = data.selected[0]?.id;

      const {data: parentData} = await shopify.query(
        `query GetParentProduct($id: ID!) {
          productVariant(id: $id) {
            product {
              id
            }
          }
        }`,
        {variables: {id: variantId}},
      );

      setProductId(parentData.productVariant.product.id);
    };

    getParentProduct();
  }, [data]);

  const handleCreate = async () => {
    const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
      data: {productId},
    });

    const response = await activity.complete;

    if (response.code === 'ok') {
      setCreated(true);
    }
  };

  return (
    <s-admin-block heading="Add Variant Component">
      {productId && (
        <>
          <s-button onClick={handleCreate}>Create Component Variant</s-button>
          {created && <s-banner status="success">Component variant created</s-banner>}
        </>
      )}
    </s-admin-block>
  );
}
