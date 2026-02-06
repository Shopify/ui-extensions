import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productId = data.selected[0]?.id;

      const {data: productData} = await shopify.query(
        `query GetProduct($id: ID!) {
          product(id: $id) {
            title
            totalInventory
            status
          }
        }`,
        {variables: {id: productId}},
      );

      setProduct(productData.product);
    };

    fetchProduct();
  }, [data]);

  return (
    <s-admin-block heading="Product Information">
      {product ? (
        <>
          <s-text>Title: {product.title}</s-text>
          <s-text>Inventory: {product.totalInventory}</s-text>
          <s-text>Status: {product.status}</s-text>
        </>
      ) : (
        <s-spinner />
      )}
    </s-admin-block>
  );
}
