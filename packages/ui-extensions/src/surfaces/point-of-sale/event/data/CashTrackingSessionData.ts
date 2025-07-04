import {BaseData} from './BaseData';
import {BaseApi} from './BaseApi';

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
