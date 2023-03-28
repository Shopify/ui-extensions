import {isValidElement, cloneElement, useCallback} from 'react';
import type {
  RenderExtensionPoint,
  I18nTranslate,
} from '@shopify/checkout-ui-extensions';
import type {RemoteComponentType} from '@remote-ui/types';

import {useExtensionApi} from './api';

/**
 * Returns the `I18nTranslate` interface used to translate strings.
 */
export function useTranslate<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): I18nTranslate {
  const {i18n} = useExtensionApi<ID>();

  const translate = useCallback<I18nTranslate>(
    (...args) => {
      const translation = i18n.translate(...args);

      if (!Array.isArray(translation)) {
        return translation as any;
      }

      return translation.map((part, index) => {
        if (isValidElement(part)) {
          return cloneElement(part as RemoteComponentType<any>, {key: index});
        }
        return part;
      });
    },
    [i18n],
  );

  return translate;
}
