export async function fetchSellingPlans(variantId) {
  const requestBody = {
    query: `#graphql
        query GetSellingPlans($variantId: ID!) {
          productVariant(id: $variantId) {
            # Note: For production use, implement pagination to fetch all sellingPlanGroups and sellingPlans as needed.
            sellingPlanGroups(first: 10) {
              nodes {
                name
                # Handle pagination (see comment above)
                sellingPlans(first: 10) {
                  nodes {
                    id
                    name
                    category
                  }
                }
              }
            }
          }
        }
      `,
    variables: {variantId: `gid://shopify/ProductVariant/${variantId}`},
  };

  const res = await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
  return res.json();
}
