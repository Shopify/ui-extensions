import type {TransactionCompleteEvent} from './events/transaction-complete-event';
import type {
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
} from './events/cash-tracking-session-events';
import type {ScanEvent} from './events/scan-event';

/**
 * Canonical event-name constants for POS host events. Prefer these over string
 * literals when calling `shopify.addEventListener` / `removeEventListener`.
 *
 * @publicDocs
 */
export const POS_EVENT_NAMES = {
  TRANSACTION_COMPLETE: 'transactioncomplete',
  CASH_TRACKING_SESSION_START: 'cashtrackingsessionstart',
  CASH_TRACKING_SESSION_COMPLETE: 'cashtrackingsessioncomplete',
  SCAN: 'scan',
} as const;

/**
 * Maps Shopify POS event names to their corresponding `Event` subclass types.
 *
 * Used as the generic type parameter for `shopify.addEventListener` and
 * `shopify.removeEventListener`.
 *
 * @publicDocs
 */
export interface ShopifyEventMap {
  [POS_EVENT_NAMES.TRANSACTION_COMPLETE]: TransactionCompleteEvent;
  [POS_EVENT_NAMES.CASH_TRACKING_SESSION_START]: CashTrackingSessionStartEvent;
  [POS_EVENT_NAMES.CASH_TRACKING_SESSION_COMPLETE]: CashTrackingSessionCompleteEvent;
  [POS_EVENT_NAMES.SCAN]: ScanEvent;
}

export type {
  TransactionCompleteEvent,
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
  ScanEvent,
};
