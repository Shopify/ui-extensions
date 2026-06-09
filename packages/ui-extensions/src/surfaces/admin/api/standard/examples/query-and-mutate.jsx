import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);

  const handleQuery = async () => {
    const {data: productsData} = await shopify.query(
      `query GetProducts {
        products(first: 10) {
          edges {
            node {
              id
              title
              totalInventory
            }
          }
        }
      }`,
    );

    setProducts(productsData.products.edges);
  };

  const handleUpdate = async () => {
    const productId = products[0]?.node.id;

    if (!productId) return;

    const {data: updateData} = await shopify.query(
      `mutation UpdateProduct($id: ID!, $input: ProductInput!) {
        productUpdate(id: $id, product: $input) {
          product {
            id
            tags
          }
          userErrors {
            field
            message
          }
        }
      }`,
      {
        variables: {
          id: productId,
          input: {tags: ['processed', 'reviewed']},
        },
      },
    );

    if (updateData.productUpdate.product) {
      setUpdated(true);
    }
  };

  return (
    <s-admin-block heading="GraphQL Operations">
      <s-stack direction="block">
        <s-button onClick={handleQuery}>Query Products</s-button>
        {products.length > 0 && (
          <>
            <s-text>{products.length} products found</s-text>
            <s-button onClick={handleUpdate}>Update First Product</s-button>
          </>
        )}
        {updated && <s-text>Product tags updated!</s-text>}
      </s-stack>
    </s-admin-block>
  );
}
