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
    translations(code) {
      return import(`@shopify/polaris/locales/${code}.json`);
    },
  });

  return (
    <PolarisProvider i18n={i18n.translations} linkComponent={Link}>
      {children}
    </PolarisProvider>
  );
}
