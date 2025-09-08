import {BaseData} from './BaseData';
import {BaseApi} from './BaseApi';

export type CashTrackingEventType =
  | 'opening'
  | 'closing'
  | 'mid-session-count'
  | 'adjustment'
  | 'sale'
  | 'refund';

export interface CashTrackingEvent {
  id: number;
  type: CashTrackingEventType;
  countExpectedAmount?: number;
  countActualAmount?: number;
  adjustmentAmount?: number;
  note?: string;
  orderId?: number;
}
export interface CashTrackingSessionStartData extends BaseData, BaseApi {
  cashTrackingSessionStart: {
    id: number;
    openingTime: string;
  };
}

export interface CashTrackingSessionCompleteData extends BaseData, BaseApi {
  cashTrackingSessionComplete: {
    id: number;
    openingTime: string;
    closingTime: string;
  };
}

export interface CashTrackingData extends BaseData, BaseApi {
  cashTracking: CashTrackingEvent;
}
