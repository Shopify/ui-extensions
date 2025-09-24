import React from 'react';

import {
  reactExtension,
  POSBlock,
  Text,
  POSBlockRow,
  useApi,
  Button,
} from '@shopify/ui-extensions-react/point-of-sale';
import {useFetchLoyaltyPoints} from './useFetchLoyaltyPoints';

export const DISCOUNT_NAME = 'Loyalty-Direct';

// [START customer-details.block.component]
// 2. Implement the `CustomerDetailsBlock` component
const CustomerDetailsBlock = () => {
  // [END customer-details.block.component]

  // [START customer-details.block.api]
  // 3. Setup the api
  const api = useApi<'pos.customer-details.block.render'>();
  // [END customer-details.block.api]

  // [START customer-details.block.fetch-loyalty-points]
  // 4. Fetch the loyalty points and filter available discounts using the useFetchLoyaltyPoints hook
  const {loading, pointsTotal, availableDiscounts} = useFetchLoyaltyPoints(
    api.customer.id,
  );
  // [END customer-details.block.fetch-loyalty-points]

  // [START customer-details.block.apply-discount]
  // 5. Implement the applyDiscount function
  const applyDiscount = (discountValue: number, pointsRequired: number) => {
    if (pointsTotal) {
      api.cart.applyCartDiscount(
        'Percentage',
        `${DISCOUNT_NAME}.${pointsTotal - pointsRequired}`,
        String(discountValue),
      );

      api.toast.show(`${discountValue}% off applied`);
    } else {
      api.toast.show(`Error applying discount`);
    }
  };
  // [END customer-details.block.apply-discount]

  // [START customer-details.block.loading-error]
  // 7. Handle error and loading states
  if (loading) {
    return (
      <POSBlock>
        <POSBlockRow>
          <Text>Loading...</Text>
        </POSBlockRow>
      </POSBlock>
    );
  }

  if (pointsTotal === null) {
    return (
      <POSBlock>
        <POSBlockRow>
          <Text color="TextWarning">Unable to fetch loyalty points.</Text>
        </POSBlockRow>
      </POSBlock>
    );
  }
  // [END customer-details.block.loading-error]

  // [START customer-details.block.render-implementation]
  // 6. Render the CustomerDetailsBlock component to display available points and discounts
  return (
    <POSBlock>
      <POSBlockRow>
        <Text
          variant="body"
          color={pointsTotal > 0 ? 'TextSuccess' : 'TextWarning'}
        >
          Point balance: {pointsTotal}
        </Text>
      </POSBlockRow>
      {availableDiscounts.length > 0 ? (
        <POSBlockRow>
          <Text variant="body">Available Discounts:</Text>
          {availableDiscounts.map((tier, index) => (
            <POSBlockRow key={`${tier.pointsRequired}-${index}`}>
              <Button
                title={`Redeem $${tier.discountValue} discount (${tier.pointsRequired} points)`}
                type="primary"
                onPress={() =>
                  applyDiscount(tier.discountValue, tier.pointsRequired)
                }
              />
            </POSBlockRow>
          ))}
        </POSBlockRow>
      ) : (
        <POSBlockRow>
          <Text variant="body" color="TextWarning">
            No available discounts.
          </Text>
        </POSBlockRow>
      )}
    </POSBlock>
  );
  // [END customer-details.block.render-implementation]
};

// [START customer-details.block.render-extension]
// 1. Render the CustomerDetailsBlock component at the `pos.customer-details.block.render` target
export default reactExtension('pos.customer-details.block.render', () => (
  <CustomerDetailsBlock />
));
// [END customer-details.block.render-extension]
