import React from 'react';

import {PerformanceReport, NavigationListener} from '@shopify/react-performance';

export function Performance({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
      <PerformanceReport url="/client-metrics" />
      <NavigationListener
        onNavigation={(navigation) => {
          // eslint-disable-next-line no-console
          console.log('navigation to', navigation.target, 'took:', navigation.duration);
        }}
      />
    </>
  );
}
