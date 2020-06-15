import {useMemo} from 'react';
import {DataApi, ExtensionPoint, ExtensionData} from '@shopify/argo';

export function useDataApi<T extends ExtensionPoint>(data: ExtensionData<T>): DataApi<T> {
  return useMemo(() => ({data}), [data]);
}
