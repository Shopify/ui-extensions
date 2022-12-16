import {useRef} from 'react';
import type {StatefulRemoteSubscribable} from '@shopify/retail-ui-extensions/src';
import {makeStatefulSubscribable} from '@shopify/retail-ui-extensions/src';
import {useExtensionApi} from '../utils';

const isLocaleApi = (api: any): boolean => {
  return 'locale' in api;
};

export function useStatefulSubscribableLocale() {
  const api = useExtensionApi();
  if (!isLocaleApi(api)) {
    throw new Error('No locale api found');
  }
  const {subscribable} = api.locale;

  const statefulSubscribableRef = useRef<StatefulRemoteSubscribable<string>>();
  if (!statefulSubscribableRef.current) {
    statefulSubscribableRef.current = makeStatefulSubscribable(subscribable);
  }

  return statefulSubscribableRef.current;
}
