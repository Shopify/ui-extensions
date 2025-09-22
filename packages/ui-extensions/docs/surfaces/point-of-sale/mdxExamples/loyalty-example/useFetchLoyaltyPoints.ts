import {useEffect, useState} from 'react';

// [START use-fetch-loyalty-points.discount-tiers]
// 1. Define discount tiers and available discounts
interface DiscountTier {
  pointsRequired: number;
  discountValue: number;
}

export const discountTiers: DiscountTier[] = [
  {pointsRequired: 100, discountValue: 5},
  {pointsRequired: 200, discountValue: 10},
  {pointsRequired: 300, discountValue: 15},
];
// [END use-fetch-loyalty-points.discount-tiers]

// [START use-fetch-loyalty-points.hook]
// 3. Implement the useFetchLoyaltyPoints hook
export const useFetchLoyaltyPoints = (customerId: number) => {
  const [pointsTotal, setPointsTotal] = useState<number | null>(0);
  const [availableDiscounts, setAvailableDiscounts] = useState<DiscountTier[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPoints() {
      try {
        const points = await fetchLoyaltyPoints(customerId);
        setPointsTotal(points);

        if (points) {
          setAvailableDiscounts(
            discountTiers.filter((tier) => points >= tier.pointsRequired),
          );
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchPoints();
  }, [customerId, pointsTotal]);

  return {
    pointsTotal,
    availableDiscounts,
    loading,
  };
};
// [END use-fetch-loyalty-points.hook]

// [START use-fetch-loyalty-points.direct-api]
// 2. Fetch the loyalty points using a Direct API query on the customer metafield
export const fetchLoyaltyPoints = async (customerId: number) => {
  const result = await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query Customer($customerId: ID!) {
          customer(id: $customerId) {
            id
            amountSpent {
              amount
            }
            metafield(namespace:"custom", key: "loyalty_direct_points") {
              value
            }
          }
        }
      `,
      variables: {
        customerId: `gid://shopify/Customer/${customerId}`,
      },
    }),
  });

  const json = await result.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    json.errors.forEach((error: any) => {
      console.error('GraphQL Error Details:', error);
    });
    return null;
  }

  if (!result.ok) {
    console.error('Network Error:', result.statusText);
    return null;
  }

  if (json.data.customer.metafield === null) {
    return 0;
  }

  return Number(json.data.customer.metafield.value);
};
// [END use-fetch-loyalty-points.direct-api]
