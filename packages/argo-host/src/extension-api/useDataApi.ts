import {useMemo} from 'react';
import {DataApi, ExtensionPoint, ExtensionData} from '@shopify/argo';

export function useDataApi<T extends ExtensionPoint>(data: ExtensionData<T>): DataApi<T> {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ({data}), [JSON.stringify(data)]);
}
