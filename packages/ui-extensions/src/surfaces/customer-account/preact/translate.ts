import {isValidElement, cloneElement} from 'preact';
import {useCallback} from 'preact/hooks';
import type {RenderExtensionTarget} from '../extension-targets';
import type {I18nTranslate} from '../api';

import {useApi} from './api';

/**
 * Returns the `I18nTranslate` interface used to translate strings.
 */
export function useTranslate<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): I18nTranslate {
  const {i18n} = useApi<Target>();

  const translate = useCallback<I18nTranslate>(
    (...args) => {
      const translation = i18n.translate(...args);

      if (!Array.isArray(translation)) {
        return translation as any;
      }

      return translation.map((part, index) => {
        if (isValidElement(part)) {
          return cloneElement(part, {key: index});
        }
        return part;
      });
    },
    [i18n],
  );

  return translate;
}
