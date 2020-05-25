import React, {ReactNode, useState} from 'react';
import {Route} from '@shopify/react-router';
import {Frame as PolarisFrame, Navigation, TopBar} from '@shopify/polaris';
import {
  HomeMajorTwotone,
  ListMajorMonotone,
  StarOutlineMinor,
  TextBlockMajorMonotone,
} from '@shopify/polaris-icons';

interface Props {
  children?: ReactNode;
}

export function Frame({children}: Props) {
  const [navOpen, setNavOpen] = useState(false);

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
            </Navigation>
          )}
        />
      }
    >
      {children}
    </PolarisFrame>
  );
}
