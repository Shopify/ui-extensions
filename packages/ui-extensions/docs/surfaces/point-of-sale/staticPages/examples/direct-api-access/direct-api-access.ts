import {
  extension,
  POSBlock,
  Text,
  POSBlockRow,
  DirectApiRequestBody,
} from '@shopify/ui-extensions/point-of-sale';
import type {DirectApiRequestBody} from '@shopify/ui-extensions/point-of-sale';

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

export default extension('pos.product-details.block.render', (root, api) => {
  const productId = api.product.id;
  const metafieldInfoText = root.createComponent(Text);
  const metafieldInfoRow = root.createComponent(POSBlockRow);

  const setMetafieldText = root.createComponent(Text);
  setMetafieldText.append('Set Metafield');

  const setMetafieldRow = root.createComponent(POSBlockRow, {
    onPress: () => mutateMetafield(productId),
  });

  async function getProductInfo() {
    const result = await queryProductMetafields(productId);
    metafieldInfoText.replaceChildren(JSON.stringify(result, null, 2));
  }

  metafieldInfoRow.append(metafieldInfoText);
  setMetafieldRow.append(setMetafieldText);

  const posBlock = root.createComponent(POSBlock);

  posBlock.append(metafieldInfoRow);
  posBlock.append(setMetafieldRow);
  root.append(posBlock);

  getProductInfo();
});
