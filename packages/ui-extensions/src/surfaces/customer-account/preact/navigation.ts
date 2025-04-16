import type {
  RenderCustomerAccountExtensionTarget,
  ApiForExtension,
} from '../extension-targets';

import {useApi} from './api';

export function useNavigation<
  Target extends RenderCustomerAccountExtensionTarget = RenderCustomerAccountExtensionTarget,
>(): ApiForExtension<Target>['navigation'] {
  return useApi<Target>().navigation;
}
