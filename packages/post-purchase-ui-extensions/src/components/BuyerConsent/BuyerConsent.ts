import {createRemoteComponent} from '@remote-ui/core';

export type Policy = 'subscriptions';

export interface BuyerConsentProps {
  /**
   * Whether the checkbox is active.
   */
  checked: boolean;
  /**
   * An error label to present with the field.
   */
  error?: string;
  /**
   * The policy the buyer has to approve
   */
  policy: Policy;
  /**
   * Callback when the value changes
   */
  onChange(value: boolean): void;
}

/**
 * BuyerConsent is used for collecting the buyer's approval for a given policy
 */
export const BuyerConsent = createRemoteComponent<
  'BuyerConsent',
  BuyerConsentProps
>('BuyerConsent');
