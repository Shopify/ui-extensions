import {BaseIntent} from '../intent';
import {
  CashTrackingSessionStartData,
  CashTrackingSessionCompleteData,
} from './data/CashTrackingSessionData';
import {TransactionCompleteData} from './data/TransactionCompleteData';
import {CartUpdateEventData} from './data/CartUpdateEventData';

export interface EventExtensionTargets {
  'pos.transaction-complete.event.observe': (
    data: TransactionCompleteData,
  ) => BaseIntent;
  'pos.cash-tracking-session-start.event.observe': (
    data: CashTrackingSessionStartData,
  ) => BaseIntent;
  'pos.cash-tracking-session-complete.event.observe': (
    data: CashTrackingSessionCompleteData,
  ) => BaseIntent;
  'pos.cart-update.event.observe': (data: CartUpdateEventData) => BaseIntent;
}

export type EventExtensionTarget = keyof EventExtensionTargets;
