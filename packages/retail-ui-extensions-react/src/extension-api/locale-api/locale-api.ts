import type {StatefulRemoteSubscribable} from '@shopify/retail-ui-extensions/src';
import {makeStatefulSubscribable} from '@shopify/retail-ui-extensions';
import {useExtensionApi} from '../utils';

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableLocale` call.
 * Use `destroyStatefulSubscribableLocale` to destroy it and all of the subscribers.
 */
let statefulSubscribable: StatefulRemoteSubscribable<string> | undefined;

/**
 * Verifies that the API has a Locale in it.
 */
const isLocaleApi = (api: any): boolean => {
  return 'locale' in api;
};

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple Locale subscriptions.
 * @returns StatefulRemoteSubscribable object with a Locale in it.
 */
export function useStatefulSubscribableLocale() {
  const api = useExtensionApi();
  if (!isLocaleApi(api)) {
    throw new Error('No locale api found');
  }
  const {subscribable} = api.locale;

  if (!statefulSubscribable) {
    statefulSubscribable = makeStatefulSubscribable(subscribable);
  }

  return statefulSubscribable;
}
/**
 * A function destroying the subscriptions `useStatefulSubscribableCart` has.
 */
export function destroyStatefulSubscribableLocale() {
  statefulSubscribable?.destroy();
  statefulSubscribable = undefined;
}
