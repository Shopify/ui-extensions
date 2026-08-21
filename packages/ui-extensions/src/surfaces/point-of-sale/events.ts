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
 * The data carried by a `cartvalidations` event.
 *
 * @private
 */
export interface CartValidationsEventData {
  /** A snapshot of the POS cart taken when the event was produced. */
  readonly cart: Cart;
}

/**
 * The event a `cartvalidations` interceptor receives. Carries a snapshot of
 * the POS cart taken when the event was produced.
 *
 * @private
 */
export interface CartValidationsEvent extends CartValidationsEventData {
  readonly type: typeof POS_INTERCEPT_NAMES.CART_VALIDATIONS;
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
 * The event a `paymentvalidations` interceptor receives. Carries the tender
 * attempt's payment method and amount; split payments produce one event per
 * tender, each with its own amount.
 *
 * @private
 */
export interface PaymentValidationsEvent extends PaymentValidationsEventData {
  readonly type: typeof POS_INTERCEPT_NAMES.PAYMENT_VALIDATIONS;
}

/**
 * The data carried by a `paymentvalidations` event.
 *
 * @private
 */
export interface PaymentValidationsEventData {
  /** The payment method staff selected. */
  readonly paymentMethod: InterceptedPaymentMethod;

  /** The amount this tender would charge, in presentment currency. */
  readonly amount: MoneyV2;
}

/**
 * Targets the whole cart rather than a specific line item.
 *
 * @private
 */
export type CartTarget = '$.cart';

/**
 * Targets one cart line item by its `uuid` from this event's `cart` snapshot,
 * for example `$.cart.lineItems['adfd6b06-4a24-4f5f-9f4b-ea21f4432dd4']`.
 *
 * @private
 */
export type CartLineItemTarget = `$.cart.lineItems['${string}']`;

/** @private */
export type CartValidationTarget = CartTarget | CartLineItemTarget;

/**
 * Targets the payment attempt being intercepted.
 *
 * @private
 */
export type PaymentTarget = '$.payment';

/** @private */
export type PaymentValidationTarget = PaymentTarget;

/**
 * Where a validation applies, as an enumerated token. Targets are matched
 * as exact strings, never evaluated as JSON paths.
 *
 * @private
 */
export type ValidationTarget = CartValidationTarget | PaymentValidationTarget;

/**
 * Maps POS interceptable workflow names to their valid validation targets.
 *
 * @private
 */
interface ValidationTargetMap {
  [POS_INTERCEPT_NAMES.CART_VALIDATIONS]: CartValidationTarget;
  [POS_INTERCEPT_NAMES.PAYMENT_VALIDATIONS]: PaymentValidationTarget;
}

/**
 * The interceptor callback for a POS interceptable workflow, keyed by the
 * workflow name so the event and its valid validation targets stay paired.
 *
 * @private
 */
export type ShopifyInterceptor<K extends keyof ShopifyInterceptMap> = (
  event: ShopifyInterceptMap[K],
) => InterceptResult<ValidationTargetMap[K]>;

/**
 * The result an interceptor returns. An empty `operations` list allows the
 * workflow; an `ERROR` validation blocks it.
 *
 * @private
 */
export interface InterceptResult<
  TTarget extends ValidationTarget = ValidationTarget,
> {
  operations: Operation<TTarget>[];
}

/**
 * A single host operation produced by an interceptor.
 *
 * @private
 */
export interface Operation<
  TTarget extends ValidationTarget = ValidationTarget,
> {
  validationAdd?: ValidationAdd<TTarget>;
}

/** @private */
export type ValidationLevel = 'WARNING' | 'ERROR';

/**
 * Adds a validation to the workflow being intercepted.
 *
 * @private
 */
export interface ValidationAdd<
  TTarget extends ValidationTarget = ValidationTarget,
> {
  /** `ERROR` blocks the workflow. `WARNING` does not. */
  level: ValidationLevel;

  /**
   * Stable identifier for this validation. Handles are namespaced per
   * extension and may repeat across targets: the same handle on two line
   * items is two validations.
   */
  handle: string;

  /**
   * Locates the data the validation applies to; the host decides where it
   * renders. Omitted or unrecognized targets fall back to the event's root
   * scope (`$.cart` / `$.payment`) — the validation still applies, rendered
   * less specifically.
   *
   * Line item uuids are only valid within the event that delivered them:
   * use `lineItems[n].uuid` from this event's cart snapshot, don't cache
   * uuids across events. Bundle components are not addressable; target
   * their parent line.
   */
  target?: TTarget;
}

export type {
  TransactionCompleteEvent,
  CashTrackingSessionStartEvent,
  CashTrackingSessionCompleteEvent,
};
