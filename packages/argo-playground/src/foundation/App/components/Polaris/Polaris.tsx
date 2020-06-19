import React, {ReactNode} from 'react';
import {Link} from '@shopify/react-router';
import {AppProvider as PolarisProvider} from '@shopify/polaris';
import {useI18n} from '@shopify/react-i18n';

interface Props {
  children?: ReactNode;
}

export function Polaris({children}: Props) {
  const [i18n] = useI18n({
    id: 'Polaris',
    translations(locale) {
      return import(
        /* webpackChunkName: "Polaris-i18n", webpackMode: "lazy-once" */ `@shopify/polaris/locales/${locale}.json`
      ).then((dictionary) => dictionary && dictionary.default);
    },
  });

  return (
    <PolarisProvider i18n={i18n.translations.reverse() || {}} linkComponent={Link}>
      {children}
    </PolarisProvider>
  );
}
