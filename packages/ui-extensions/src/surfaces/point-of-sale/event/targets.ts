import {BaseIntent} from '../intent';
import {
  CashTrackingSessionStartInput,
  CashTrackingSessionEndInput,
  CashTrackingSessionCancelInput,
} from './input/CashTrackingSessionInput';
import {PurchaseCompleteInput} from './input/PurchaseCompleteInput';

export interface EventExtensionTargets {
  'pos.transaction-completed.event.observe': (
    input: PurchaseCompleteInput,
  ) => BaseIntent;
  'pos.cash-tracking-session-start.event.observe': (
    input: CashTrackingSessionStartInput,
  ) => BaseIntent;
  'pos.cash-tracking-session-cancel.event.observe': (
    input: CashTrackingSessionCancelInput,
  ) => BaseIntent;
  'pos.cash-tracking-session-complete.event.observe': (
    input: CashTrackingSessionEndInput,
  ) => BaseIntent;
}

export type EventExtensionTarget = keyof EventExtensionTargets;
