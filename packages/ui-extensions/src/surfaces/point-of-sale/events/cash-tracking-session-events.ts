/**
 * Shared fields for every cash tracking session event.
 */
interface CashTrackingSessionEvent {
  /** The numeric identifier for the cash tracking session. */
  readonly id: number;
  /** ISO 8601 timestamp when the session was opened. */
  readonly openingTime: string;
}

/**
 * Dispatched when a cash tracking session is opened.
 * @publicDocs
 */
export interface CashTrackingSessionStartEvent
  extends CashTrackingSessionEvent {}

/**
 * Dispatched when a cash tracking session is successfully closed via
 * reconciliation.
 * @publicDocs
 */
export interface CashTrackingSessionCompleteEvent
  extends CashTrackingSessionEvent {
  /** ISO 8601 timestamp when the session was closed. */
  readonly closingTime: string;
}
