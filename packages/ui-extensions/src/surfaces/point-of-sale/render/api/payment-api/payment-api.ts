import type {PaymentWithDetails, PaymentTerminal} from '../../../types/payment';

/**
 * Represents the status of a payment attempt
 */
export type PaymentAttemptStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'timeout';

/**
 * Represents the result of a payment attempt
 */
export interface PaymentAttemptResult {
  /** Unique identifier for the payment attempt */
  attemptId: string;
  /** The payment information */
  payment: PaymentWithDetails;
  /** The status of the payment attempt */
  status: PaymentAttemptStatus;
  /** Additional details about the payment result */
  details?: {
    /** Error message if the payment failed */
    errorMessage?: string;
    /** Error code if the payment failed */
    errorCode?: string;
    /** Transaction reference from the payment processor */
    transactionReference?: string;
    /** Additional metadata from the payment processor */
    metadata?: Record<string, any>;
  };
  /** Timestamp when the payment attempt was completed */
  completedAt: Date;
}

/**
 * Options for initiating a payment attempt
 */
export interface PaymentAttemptOptions {
  /** The payment information */
  payment: PaymentWithDetails;
  /** Optional metadata to associate with the payment attempt */
  metadata?: Record<string, any>;
  /** Timeout in milliseconds for the payment attempt (default: 30000) */
  timeout?: number;
  /** Whether to require confirmation before processing */
  requireConfirmation?: boolean;
}

/**
 * Callback function for payment attempt results
 */
export type PaymentResultCallback = (result: PaymentAttemptResult) => void;

export interface PaymentApiContent {
  /**
   * Initiates a payment attempt and notifies the result via callback.
   * @param options Payment attempt options including payment details
   * @param callback Callback function to receive the payment result
   * @returns A promise that resolves with the attempt ID
   */
  attemptPayment: (
    options: PaymentAttemptOptions,
    callback: PaymentResultCallback,
  ) => Promise<string>;

  /**
   * Cancels a pending payment attempt.
   * @param attemptId The ID of the payment attempt to cancel
   * @returns A promise that resolves when the cancellation is processed
   */
  cancelPaymentAttempt: (attemptId: string) => Promise<void>;

  /**
   * Gets the current status of a payment attempt.
   * @param attemptId The ID of the payment attempt
   * @returns A promise that resolves with the current status
   */
  getPaymentAttemptStatus: (
    attemptId: string,
  ) => Promise<PaymentAttemptStatus | undefined>;

  /**
   * Notifies about a payment attempt result. This is typically used
   * when integrating with external payment processors.
   * @param result The payment attempt result to notify
   */
  notifyPaymentResult: (result: PaymentAttemptResult) => void;

  /**
   * Gets a list of available payment terminals.
   * @returns A promise that resolves with available terminals
   */
  getAvailableTerminals: () => Promise<PaymentTerminal[]>;

  /**
   * Sets the preferred terminal for payment processing.
   * @param terminalId The ID of the terminal to use
   * @returns A promise that resolves when the terminal is set
   */
  setPreferredTerminal: (terminalId: string) => Promise<void>;
}

/**
 * Payment API for handling payment attempts and notifications
 */
export interface PaymentApi {
  payment: PaymentApiContent;
}
