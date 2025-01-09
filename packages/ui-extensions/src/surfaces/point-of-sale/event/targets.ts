import {BaseIntent} from '../intent';
import {PurchaseCompleteInput} from './input/PurchaseCompleteInput';

export interface EventExtensionTargets {
  'pos.transaction-completed.observe': (
    input: PurchaseCompleteInput,
  ) => BaseIntent;
}

export type EventExtensionTarget = keyof EventExtensionTargets;
