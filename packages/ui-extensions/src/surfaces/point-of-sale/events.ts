import type {TransactionCompleteEvent} from './events/transaction-complete-event';
import type {
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
} from './events/cash-tracking-session-events';

/**
 * Maps Shopify POS event names to their corresponding `Event` subclass types.
 *
 * Used as the generic type parameter for `shopify.addEventListener` and
 * `shopify.removeEventListener`.
 *
 * @publicDocs
 */
export interface ShopifyEventMap {
  transactioncomplete: TransactionCompleteEvent;
  cashtrackingsessionstart: CashTrackingSessionStartEvent;
  cashtrackingsessioncomplete: CashTrackingSessionCompleteEvent;
}

export type {
  TransactionCompleteEvent,
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
};
