import React, {useState} from 'react';

import {
  reactExtension,
  POSBlock,
  Text,
  POSBlockRow,
  useApi,
  Button,
} from '@shopify/ui-extensions-react/point-of-sale';

import {useLoyaltyPoints} from './useLoyaltyPoints';
import {applyDiscount} from './applyDiscount';

// For development purposes, we'll use a local server
export const serverUrl =
  'https://hrs-macintosh-graph-testimonials.trycloudflare.com';
// [START loyalty-points-block.discounts]
// 1. Define discount tiers and available discounts
const discountTiers = [
  {pointsRequired: 100, discountValue: 5},
  {pointsRequired: 200, discountValue: 10},
  {pointsRequired: 300, discountValue: 15},
];
// [END loyalty-points-block.discounts]
const LoyaltyPointsBlock = () => {
  // [START loyalty-points-block.api]
  // 2. Initialize API
  const api = useApi<'pos.customer-details.block.render'>();
  const customerId = api.customer.id;
  const [pointsTotal, setPointsTotal] = useState<number | null>(null);
  // [END loyalty-points-block.api]

  // [START loyalty-points-block.use-loyalty-points]
  // 3. Pass setPointsTotal to useLoyaltyPoints to calculate the points total
  const {loading} = useLoyaltyPoints(api, customerId, setPointsTotal);
  // [END loyalty-points-block.use-loyalty-points]

  // [START loyalty-points-block.available-discounts]
  // 4. Filter available discounts based on points total
  const availableDiscounts = pointsTotal
    ? discountTiers.filter((tier) => pointsTotal >= tier.pointsRequired)
    : [];
  // [END loyalty-points-block.available-discounts]
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (pointsTotal === null) {
    return (
      <POSBlock>
        <POSBlockRow>
          <Text color="TextWarning">Unable to fetch points total.</Text>
        </POSBlockRow>
      </POSBlock>
    );
  }
  return (
    <POSBlock>
      <POSBlockRow>
        <Text variant="headingLarge" color="TextSuccess">
          {/* [START loyalty-points-block.display-points] */}
          {/* 5. Display the points total */}
          Point Balance:{pointsTotal}
        </Text>
      </POSBlockRow>
      {/* [END loyalty-points-block.display-points] */}
      {availableDiscounts.length > 0 ? (
        <POSBlockRow>
          <Text variant="headingSmall">Available Discounts:</Text>
          {/* [START loyalty-points-block.display-discounts] */}
          {/* 6. Display available discounts as buttons, calling applyDiscount */}
          {availableDiscounts.map((tier, index) => (
            <POSBlockRow key={`${tier.pointsRequired}-${index}`}>
              <Button
                title={`Redeem $${tier.discountValue} Discount (Use ${tier.pointsRequired} points)`}
                type="primary"
                onPress={() =>
                  applyDiscount(
                    api,
                    customerId,
                    tier.discountValue,
                    tier.pointsRequired,
                    setPointsTotal,
                  )
                }
              />
            </POSBlockRow>
          ))}
        </POSBlockRow>
      ) : (
        <POSBlockRow>
          <Text variant="headingSmall" color="TextWarning">
            No available discounts.
          </Text>
        </POSBlockRow>
      )}
    </POSBlock>
  );
};
// 7. Render the LoyaltyPointsBlock component at the appropriate target
// [START loyalty-points-block.render]
export default reactExtension('pos.customer-details.block.render', () => (
  <LoyaltyPointsBlock />
));
// [END loyalty-points-block.render]
