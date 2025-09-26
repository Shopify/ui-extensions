import {extension} from '@shopify/ui-extensions/point-of-sale';
import {DISCOUNT_NAME} from './CustomerDetailsBlock';
import {fetchLoyaltyPoints} from './useFetchLoyaltyPoints';

// [START transaction-complete.event.observe.implementation]
// 1. Implement the `pos.transaction-complete.event.observe` extension target
export default extension(
  'pos.transaction-complete.event.observe',
  async (data) => {
    // [END transaction-complete.event.observe.implementation]

    // [START transaction-complete.event.observe.find-loyalty-discount]
    // 3. Look for any loyalty discounts in the transaction and redeem the points
    const loyaltyDiscount = data.transaction.discounts?.find((discount) =>
      discount.discountDescription?.includes(DISCOUNT_NAME),
    );

    const parsePointsLeft = (discountName) => {
      const pointsLeft = discountName.split('.')[1];
      return parseInt(pointsLeft);
    };

    if (
      loyaltyDiscount &&
      loyaltyDiscount.discountDescription &&
      data.transaction.customer
    ) {
      const pointsLeft = parsePointsLeft(loyaltyDiscount.discountDescription);
      updateLoyaltyPoints(data.transaction.customer.id, pointsLeft);
    }
    // [END transaction-complete.event.observe.find-loyalty-discount]

    // [START transaction-complete.event.observe.update-points-earned]
    // 4. If no loyalty discount is found, apply the points earned
    if (!loyaltyDiscount && data.transaction.customer) {
      const pointsEarned = Math.ceil(data.transaction.subtotal.amount);
      const currentPoints =
        (await fetchLoyaltyPoints(data.transaction.customer.id)) ?? 0;
      updateLoyaltyPoints(
        data.transaction.customer.id,
        currentPoints + pointsEarned,
      );
    }
    // [END transaction-complete.event.observe.update-points-earned]
    return {};
  },
);

// [START transaction-complete.event.observe.direct-api]
// 2. Implement the updateLoyaltyPoints function using Direct API graphql mutation
const updateLoyaltyPoints = async (
  customerId,
  newPointsBalance,
) => {
  await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
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
            key: 'loyalty_direct_points',
            namespace: 'custom',
            ownerId: `gid://shopify/Customer/${customerId}`,
            value: `${newPointsBalance}`,
            type: 'number_integer',
          },
        ],
      },
    }),
  });
};
// [END transaction-complete.event.observe.direct-api]
