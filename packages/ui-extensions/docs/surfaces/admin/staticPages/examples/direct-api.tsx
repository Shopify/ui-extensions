import {
  reactExtension,
  useApi,
  BlockStack,
  Text,
  AppAction,
} from '@shopify/ui-extensions-react/admin';
import { useEffect, useState } from "react";

export default reactExtension('admin.product-details.block.render', () => <App />);

function App() {
  const [product, setProduct] = useState({});
  const {data} = useApi();

  const getProduct = async () => {
     const updateProductQuery = {
      query: `query GetProduct($id: ID!, $bodyHtml: String) {
        productUpdate(input: { id: $id, bodyHtml: $bodyHtml }) {
          product {
            title
          }
        }
      }`,
      variables: {id: data.selected[0].id},
    };

    await fetch("shopify:admin/api/graphql.json", {
      method: "POST",
      body: JSON.stringify(updateProductQuery),
    }).then(response => setProduct(response.json()));
  };

  useEffect(() => {
    getProduct();
  }, [data]);



  return (
    <AppAction title="Read Shopify Products">
      <BlockStack>
        <Text strong={true}>My product title is {product.title}</Text>
      </BlockStack>
    </AppAction>
  );
}
