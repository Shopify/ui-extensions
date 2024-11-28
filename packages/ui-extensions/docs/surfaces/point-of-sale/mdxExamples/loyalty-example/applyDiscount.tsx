import {serverUrl} from './LoyaltyPointsBlock';
import type {
  ApiForRenderExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/point-of-sale';
export const applyDiscount = async <Target extends RenderExtensionTarget>(
  api: ApiForRenderExtension<Target>,
  customerId: number,
  discountValue: number,
  pointsToDeduct: number,
  setPointsTotal: React.Dispatch<React.SetStateAction<number | null>>,
) => {
  // [START apply-discount.cart]
  // 1. Apply discount to cart using the Cart API

  api.cart.applyCartDiscount(
    'FixedAmount',
    'Loyalty Discount',
    discountValue.toString(),
  );
  // [END apply-discount.cart]
  const sessionToken = await api.session.getSessionToken();

  // 2. Deduct points from server
  // [START apply-discount.deduct]
  const response = await fetch(`${serverUrl}/points/${customerId}/deduct`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({pointsToDeduct}),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to deduct points: ${errorText}`);
    return;
  }
  const {updatedPointsTotal} = await response.json();
  console.log('Updated points total:', updatedPointsTotal);
  // [END apply-discount.deduct]
};
