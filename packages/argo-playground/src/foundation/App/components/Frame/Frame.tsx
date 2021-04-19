import React, {ReactNode, useState} from 'react';
import {Frame as PolarisFrame, Navigation, Select, TopBar} from '@shopify/polaris';
import {HomeMajorTwotone, ListMajorMonotone, TextBlockMajorMonotone} from '@shopify/polaris-icons';
import {Route} from '@shopify/react-router';

import {GlobalLocaleProvider} from '../../ultilities/useGlobalLocale';

interface Props {
  children?: ReactNode;
}

const locales = [
  {label: 'English', value: 'en'},
  {label: 'French', value: 'fr'},
  {label: 'Japanese', value: 'ja'},
];

export function Frame({children}: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const [locale, setLocale] = useState(locales[0].value);

  return (
    <PolarisFrame
      showMobileNavigation={navOpen}
      onNavigationDismiss={() => setNavOpen(false)}
      topBar={<TopBar showNavigationToggle onNavigationToggle={() => setNavOpen(!navOpen)} />}
      navigation={
        <Route
          render={({location}) => (
            <Navigation location={location.pathname} onDismiss={() => setNavOpen(false)}>
              <Navigation.Section
                items={[
                  {
                    label: 'Home',
                    url: '',
                    exactMatch: true,
                    icon: HomeMajorTwotone,
                  },
                  {
                    label: 'Components List',
                    url: '/components-list',
                    exactMatch: true,
                    icon: ListMajorMonotone,
                  },
                  {
                    label: 'Inline Script',
                    url: '/inline-script',
                    exactMatch: true,
                    icon: TextBlockMajorMonotone,
                  },
                  {
                    label: 'Containers',
                    url: '/containers',
                    exactMatch: true,
                    icon: TextBlockMajorMonotone,
                  },
                  {
                    label: 'Use Form',
                    url: '/use-form',
                    exactMatch: true,
                    icon: TextBlockMajorMonotone,
                  },
                  {
                    label: 'Vanilla',
                    url: '/vanilla',
                    exactMatch: true,
                    icon: TextBlockMajorMonotone,
                  },
                  {
                    label: 'Render Error',
                    url: '/render-error',
                    exactMatch: true,
                    icon: TextBlockMajorMonotone,
                  },
                ]}
              />
              <div style={{marginLeft: '1.6rem', marginRight: '1.6rem'}}>
                <Select label="Locale" options={locales} onChange={setLocale} value={locale} />
              </div>
            </Navigation>
          )}
        />
      }
    >
      <GlobalLocaleProvider locale={locale}>{children}</GlobalLocaleProvider>
    </PolarisFrame>
  );
}
