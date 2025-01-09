import type {ConnectivityState, Device, Session} from '../../../point-of-sale';

export interface BaseInput {
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
}
