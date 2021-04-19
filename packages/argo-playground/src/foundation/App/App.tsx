import React from 'react';

import {useAcceptLanguage} from '@shopify/react-network';
import {I18nUniversalProvider} from '@shopify/react-i18n-universal-provider';
import {Router} from '@shopify/react-router';
import Routes from '../Routes';

import {ContentSecurityPolicy, Metadata, Performance, Polaris, Frame} from './components';

interface Props {
  locale?: string;
  location?: string;
}

function App({location}: Props) {
  const [language] = useAcceptLanguage({code: 'en', quality: 1.0});

  return (
    <>
      <ContentSecurityPolicy />
      <Metadata />
      <Performance>
        <I18nUniversalProvider locale={language.code} fallbackLocale="en">
          <Polaris>
            <Router location={location}>
              <Frame>
                <Routes />
              </Frame>
            </Router>
          </Polaris>
        </I18nUniversalProvider>
      </Performance>
    </>
  );
}

export default App;
