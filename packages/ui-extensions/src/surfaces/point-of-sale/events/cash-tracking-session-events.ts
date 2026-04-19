/**
 * Dispatched when a cash tracking session is opened.
 * @publicDocs
 */
export interface CashTrackingSessionStartEvent extends Event {
  /** The numeric identifier for the cash tracking session. */
  readonly id: number;
  /** ISO 8601 timestamp when the session was opened. */
  readonly openingTime: string;
}

/**
 * Dispatched when a cash tracking session is successfully closed via
 * reconciliation. Abandoned or force-closed sessions do not fire this event.
 * @publicDocs
 */
export interface CashTrackingSessionCompleteEvent extends Event {
  /** The numeric identifier for the cash tracking session. */
  readonly id: number;
  /** ISO 8601 timestamp when the session was opened (carried forward from session start). */
  readonly openingTime: string;
  /** ISO 8601 timestamp when the session was closed. */
  readonly closingTime: string;
}
