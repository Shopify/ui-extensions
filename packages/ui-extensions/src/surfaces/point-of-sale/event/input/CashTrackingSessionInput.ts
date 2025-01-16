import {BaseInput} from './BaseInput';

export interface CashTrackingSessionStartInput extends BaseInput {
  cashTrackingSessionStart: {
    id: number;
    openingTime: string;
  };
}

export interface CashTrackingSessionCompleteInput extends BaseInput {
  cashTrackingSessionComplete: {
    id: number;
    openingTime: string;
    closingTime: string;
  };
}

export interface CashTrackingSessionCancelInput extends BaseInput {
  cashTrackingSessionCancel: {
    id: number;
    openingTime?: string;
    closingTime?: string;
  };
}
