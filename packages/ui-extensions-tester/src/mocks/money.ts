/**
 * Creates a mock money value with sensible defaults.
 * Structurally compatible with the `Money` type from all surfaces.
 */
export function createMoney(): {amount: number; currencyCode: 'USD'} {
  return {amount: 0, currencyCode: 'USD'};
}
