import type {TransactionCompleteEvent} from './events/transaction-complete-event';
import type {
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
} from './events/cash-tracking-session-events';
import type {Cart} from './types/cart';
import type {MoneyV2} from './types/money';

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
  CART_VALIDATIONS: 'cartvalidations',
  PAYMENT_VALIDATIONS: 'paymentvalidations',
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
  [POS_INTERCEPT_NAMES.CART_VALIDATIONS]: CartValidationsEvent;
  [POS_INTERCEPT_NAMES.PAYMENT_VALIDATIONS]: PaymentValidationsEvent;
}

/**
 * Dispatched when staff attempts to leave the active cart for checkout.
 *
 * @private
 */
export interface CartValidationsEvent extends Event {
  readonly type: typeof POS_INTERCEPT_NAMES.CART_VALIDATIONS;
  /** The POS cart at the point checkout was requested. */
  readonly cart: Cart;
}

/**
 * The kind of payment method being attempted.
 *
 * @private
 */
export type InterceptedPaymentMethodType = 'cash';

/**
 * Identifies the payment method being attempted.
 *
 * `type` alone identifies singleton methods (for example `cash`). `identifier`
 * disambiguates method types a shop can have several of (for example custom
 * payment methods) as they become interceptable.
 *
 * @private
 */
export interface InterceptedPaymentMethod {
  readonly type: InterceptedPaymentMethodType;

  /** Present when `type` alone is ambiguous. Matching is exact on the pair. */
  readonly identifier?: string;
}

/**
 * Dispatched when staff selects a payment method on the payments screen.
 *
 * @private
 */
export interface PaymentValidationsEvent extends Event {
  readonly type: typeof POS_INTERCEPT_NAMES.PAYMENT_VALIDATIONS;

  /** The payment method staff selected. */
  readonly paymentMethod: InterceptedPaymentMethod;

  /** The amount this tender would charge, in presentment currency. */
  readonly amount: MoneyV2;
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
export type ValidationLevel = 'WARNING' | 'ERROR';

/**
 * Adds a validation to the workflow being intercepted.
 *
 * @private
 */
export interface ValidationAdd {
  /** `ERROR` blocks the workflow. `WARNING` does not. */
  level: ValidationLevel;

  /** Stable identifier for this validation. */
  handle: string;

  /** JSON-path locator for where the validation applies. */
  target?: string;
}

export type {
  TransactionCompleteEvent,
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
};
