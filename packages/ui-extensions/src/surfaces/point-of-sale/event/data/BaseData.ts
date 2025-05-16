import type {ConnectivityState, Device, Session} from '../../../point-of-sale';
import {Storage} from '../../types/storage';

export interface BaseData {
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
  storage?: Storage;
}
