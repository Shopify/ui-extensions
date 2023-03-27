import {RemoteSubscribable} from '@remote-ui/async-subscription';

export interface ScannerApiContent {
  subscribable: RemoteSubscribable<string>;
}

export interface ScannerApi {
  scanner: ScannerApiContent;
}
