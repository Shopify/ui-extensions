import {render} from 'preact';
import {useFetchLoyaltyPoints} from './useFetchLoyaltyPoints';

export const DISCOUNT_NAME = 'Loyalty-Direct';

export default function extension() {
  render(<CustomerDetailsBlock />, document.body);
}

// [START customer-details.block.component]
// 2. Implement the `CustomerDetailsBlock` component
function CustomerDetailsBlock() {
  // [END customer-details.block.component]

  // [START customer-details.block.api]
  // 3. Setup the api - using global shopify object
  const customerId = shopify.customer.id;
  // [END customer-details.block.api]

  // [START customer-details.block.fetch-loyalty-points]
  // 4. Fetch the loyalty points and filter available discounts using the useFetchLoyaltyPoints hook
  const {loading, pointsTotal, availableDiscounts} = useFetchLoyaltyPoints(
    customerId,
  );
  // [END customer-details.block.fetch-loyalty-points]

  // [START customer-details.block.apply-discount]
  // 5. Implement the applyDiscount function
  const applyDiscount = (discountValue, pointsRequired) => {
    if (pointsTotal) {
      shopify.cart.applyCartDiscount(
        'Percentage',
        `${DISCOUNT_NAME}.${pointsTotal - pointsRequired}`,
        String(discountValue),
      );

      shopify.toast.show(`${discountValue}% off applied`);
    } else {
      shopify.toast.show(`Error applying discount`);
    }
  };
  // [END customer-details.block.apply-discount]

  // [START customer-details.block.loading-error]
  // 7. Handle error and loading states
  if (loading) {
    return (
      <s-posblock>
        <s-text>Loading...</s-text>
      </s-posblock>
    );
  }

  if (pointsTotal === null) {
    return (
      <s-posblock>
        <s-text tone="warning">Unable to fetch loyalty points.</s-text>
      </s-posblock>
    );
  }
  // [END customer-details.block.loading-error]

  // [START customer-details.block.render-implementation]
  // 6. Render the CustomerDetailsBlock component to display available points and discounts
  return (
    <s-posblock>
      <s-text
        variant="body"
        tone={pointsTotal > 0 ? 'success' : 'warning'}
      >
        Point balance: {pointsTotal}
      </s-text>
      {availableDiscounts.length > 0 ? (
        <>
          <s-text variant="body">Available Discounts:</s-text>
          {availableDiscounts.map((tier, index) => (
            <s-button
              key={`${tier.pointsRequired}-${index}`}
              variant="primary"
              onClick={() =>
                applyDiscount(tier.discountValue, tier.pointsRequired)
              }
            >
              Redeem ${tier.discountValue} discount ({tier.pointsRequired} points)
            </s-button>
          ))}
        </>
      ) : (
        <s-text variant="body" tone="warning">
          No available discounts.
        </s-text>
      )}
    </s-posblock>
  );
  // [END customer-details.block.render-implementation]
}

// [START customer-details.block.render-extension]
// 1. Render the CustomerDetailsBlock component at the `pos.customer-details.block.render` target
// Note: The component is now rendered in the default export function
// [END customer-details.block.render-extension]
