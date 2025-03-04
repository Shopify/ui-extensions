import type {ConnectivityState, Device, Session} from '../../../point-of-sale';

// meta-type data that's automatically included by POS.
export interface BaseMetaInput {
  connectivity: ConnectivityState;
  device: Device;
  locale: string;
  session: Session;
}

// required input by all event targets.
export interface BaseInput {}
