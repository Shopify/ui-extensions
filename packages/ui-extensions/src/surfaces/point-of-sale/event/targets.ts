import {BaseIntent} from '../intent';
import {
  CashTrackingSessionStartInput,
  CashTrackingSessionCompleteInput,
  CashTrackingSessionCancelInput,
} from './input/CashTrackingSessionInput';
import {TransactionCompleteInput} from './input/TransactionCompleteInput';
import {CartUpdateEventInput} from './input/CartUpdateEventInput';

export interface EventExtensionTargets {
  'pos.transaction-complete.event.observe': (
    input: TransactionCompleteInput,
  ) => BaseIntent;
  'pos.cash-tracking-session-start.event.observe': (
    input: CashTrackingSessionStartInput,
  ) => BaseIntent;
  'pos.cash-tracking-session-cancel.event.observe': (
    input: CashTrackingSessionCancelInput,
  ) => BaseIntent;
  'pos.cash-tracking-session-complete.event.observe': (
    input: CashTrackingSessionCompleteInput,
  ) => BaseIntent;
  'pos.cart-update.event.observe': (input: CartUpdateEventInput) => BaseIntent;
}

export type EventExtensionTarget = keyof EventExtensionTargets;
