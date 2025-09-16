import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';


// This mutation requires the `write_products` access scope.
// https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset
async function mutateMetafield(productId) {
  const requestBody = {
    query: `#graphql
        mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
          metafieldsSet(metafields: $metafields) {
            metafields {
              key
              namespace
              value
              createdAt
              updatedAt
            }
          }
        }
      `,
    variables: {
      metafields: [
        {
          key: 'direct_api',
          namespace: 'custom',
          ownerId: `gid://shopify/Product/${productId}`,
          value: 'Example Value',
          type: 'single_line_text_field',
        },
      ],
    },
  };

  await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
}

// This query requires the `read_products` access scope.
// https://shopify.dev/docs/api/admin-graphql/latest/queries/product
async function queryProductMetafields(productId) {
  const requestBody = {
    query: `#graphql
      query GetProduct($id: ID!) {
        product(id: $id) {
          id
          metafields(first: 10) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
      }
    `,
    variables: {id: `gid://shopify/Product/${productId}`},
  };
  const res = await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
  return res.json();
}

export default async () => {
  render(<ProductDetailsBlock />, document.body);
};

export function ProductDetailsBlock() {
  const [productInfo, setProductInfo] = useState('');
  useEffect(() => {
    async function getProductInfo() {
      const result = await queryProductMetafields(shopify.product.id);
      setProductInfo(JSON.stringify(result, null, 2));
    }
    getProductInfo();
  }, [shopify.product.id]);

  return (
    <s-pos-block>
      <s-box padding="large">
        <s-text>Metafields: {productInfo}</s-text>
      </s-box>
      <s-box padding="large">
        <s-text>Set Metafields: {productInfo}</s-text>
        <s-button onClick={() => mutateMetafield(shopify.product.id)}>Set Metafields</s-button>
      </s-box>
    </s-pos-block>
  );
}