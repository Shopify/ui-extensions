import {
  reactExtension,
  useApi,
  Text,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions-react/point-of-sale';
import type {DirectApiRequestBody} from '@shopify/ui-extensions-react/point-of-sale';
import {useEffect, useState} from 'react';

async function mutateMetafield(productId: number) {
  const requestBody: DirectApiRequestBody = {
    query: `
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
        },
      ],
    },
  };

  await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
}

async function queryProductMetafields(productId: number) {
  const requestBody: DirectApiRequestBody = {
    query: `
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

const ProductDetailsBlock = () => {
  const {product} = useApi<'pos.product-details.block.render'>();
  const [productInfo, setProductInfo] = useState<any>();
  useEffect(() => {
    async function getProductInfo() {
      const result = await queryProductMetafields(product.id);
      setProductInfo(JSON.stringify(result, null, 2));
    }
    getProductInfo();
  }, [product.id]);

  return (
    <POSBlock>
      <POSBlockRow>
        <Text>Metafields: {productInfo}</Text>
      </POSBlockRow>
      <POSBlockRow onPress={() => mutateMetafield(product.id)}>
        <Text>Set metafield</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.product-details.block.render', () => (
  <ProductDetailsBlock />
));
