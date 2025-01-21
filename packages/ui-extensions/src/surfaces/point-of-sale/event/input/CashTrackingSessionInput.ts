import {BaseInput} from './BaseInput';

export interface CashTrackingSessionStartInput extends BaseInput {
  id: number;
  openingTime: string;
}

export interface CashTrackingSessionEndInput extends BaseInput {
  id: number;
  openingTime: string;
  closingTime: string;
}

export interface CashTrackingSessionCancelInput extends BaseInput {
  id: number;
  openingTime?: string;
  closingTime?: string;
}
