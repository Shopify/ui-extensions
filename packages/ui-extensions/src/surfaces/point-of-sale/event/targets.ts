import {BaseIntent} from '../intent';
import {PurchaseCompleteInput} from './input/PurchaseCompleteInput';

export interface EventExtensionTargets {
  'pos.purchase-complete.observe': (input: PurchaseCompleteInput) => BaseIntent;
}

export type EventExtensionTarget = keyof EventExtensionTargets;
