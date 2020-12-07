import {ProductSubscriptionExtensionApi} from './product-subscriptions';
import {StandardApi} from './standard-api';

export interface ExtensionApi extends ProductSubscriptionExtensionApi {
  Playground: StandardApi<'Playground'>;
}
