import type {TransactionCompleteEvent} from './events/transaction-complete-event';
import type {
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
} from './events/cash-tracking-session-events';
import type {Cart} from './types/cart';

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
} as const;

/**
 * Canonical workflow-name constants for POS host interceptions. Prefer these
 * over string literals when calling `shopify.intercept`.
 *
 * @private
 */
export const POS_INTERCEPT_NAMES = {
  BEFORE_CHECKOUT: 'beforecheckout',
} as const;

/**
 * Maps Shopify POS event names to their corresponding payload types.
 *
 * Used as the generic type parameter for `shopify.addEventListener` and
 * `shopify.removeEventListener`.
 *
 * @publicDocs
 */
export interface ShopifyEventMap {
  /**
   * Dispatched when a sale, return, or exchange transaction completes.
   * Narrow on `transactionType` to access per-type fields.
   */
  [POS_EVENT_NAMES.TRANSACTION_COMPLETE]: TransactionCompleteEvent;
  /** Dispatched when a cash tracking session opens. */
  [POS_EVENT_NAMES.CASH_TRACKING_SESSION_START]: CashTrackingSessionStartEvent;
  /** Dispatched when a cash tracking session closes after reconciliation. */
  [POS_EVENT_NAMES.CASH_TRACKING_SESSION_COMPLETE]: CashTrackingSessionCompleteEvent;
}

/**
 * Maps POS interceptable workflow names to their corresponding `Event` types.
 *
 * Used as the generic type parameter for `shopify.intercept`.
 *
 * @private
 */
export interface ShopifyInterceptMap {
  [POS_INTERCEPT_NAMES.BEFORE_CHECKOUT]: BeforeCheckoutEvent;
}

/**
 * Dispatched when staff attempts to leave the active cart for checkout.
 *
 * @private
 */
export interface BeforeCheckoutEvent extends Event {
  readonly type: typeof POS_INTERCEPT_NAMES.BEFORE_CHECKOUT;
  /** The POS cart at the point checkout was requested. */
  readonly cart: Cart;
}

/** @private */
export type ShopifyInterceptor<TEvent extends Event> = (
  event: TEvent,
) => InterceptResult;

/**
 * The result an interceptor returns. An empty `operations` list allows the
 * workflow; an `ERROR` validation blocks it.
 *
 * @private
 */
export interface InterceptResult {
  operations: Operation[];
}

/**
 * A single host operation produced by an interceptor.
 *
 * @private
 */
export interface Operation {
  validationAdd?: ValidationAdd;
}

/** @private */
export type ValidationLevel = 'INFO' | 'WARNING' | 'ERROR';

/**
 * Adds a validation to the workflow being intercepted.
 *
 * @private
 */
export interface ValidationAdd {
  /** `ERROR` blocks the workflow. `WARNING` and `INFO` do not. */
  level: ValidationLevel;

  /** Stable identifier for this validation. */
  handle: string;

  /** Host-facing message for support, observability, or staff UX. */
  message: string;

  /** JSON-path locator for where the validation applies. Defaults to `$.cart`. */
  target?: string;

  /** Optional structured data for custom UX or order metadata. */
  metafields?: Metafield[];
}

/**
 * Metafield input attached to a validation.
 *
 * @private
 */
export interface Metafield {
  namespace: string;
  key: string;
  value: string;
  type: string;
}

export type {
  TransactionCompleteEvent,
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
};
