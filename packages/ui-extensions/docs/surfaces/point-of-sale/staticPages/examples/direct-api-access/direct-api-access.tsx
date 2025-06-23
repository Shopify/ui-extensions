import {
  reactExtension,
  useApi,
  POSBlock,
  POSBlockRow,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';
import type {DirectApiRequestBody} from '@shopify/ui-extensions/point-of-sale';
import React, {useEffect, useState} from 'react';

// This mutation requires the `write_products` access scope.
// https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset
async function mutateMetafield(productId: number) {
  const requestBody: DirectApiRequestBody = {
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
        },
      ],
    },
  };

  await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
}

// https://shopify.dev/docs/api/admin-graphql/latest/queries/product
async function queryProductMetafields(productId: number) {
  const requestBody: DirectApiRequestBody = {
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

const ProductDetailsBlock = () => {
  const {product} = useApi<'pos.product-details.block.render'>();
  const [productInfo, setProductInfo] = useState<string>('');
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
