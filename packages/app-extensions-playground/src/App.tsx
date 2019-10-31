import {AppProvider, FooterHelp, Link, Page} from '@shopify/polaris';
import {useRedirect, useRoutes} from 'hookrouter';
import UIBuilder from '@shopify/app-extensions-ui-builder';
import React from 'react';
import Home from './home';
import Repl from './repl';

const routes = {
  '/': () => <Home />,
  '/builder': () => <UIBuilder />,
  '/repl/:id': ({id}: {id: string}) => <Repl snippetId={parseInt(id, 10)} />,
};

function App() {
  useRedirect('/repl', '/repl/0');
  const page = useRoutes(routes);

  return (
    <AppProvider i18n={{}}>
      <Page fullWidth title="Render &amp; Execution Environment">
        <div style={{marginTop: '16px'}}>{page}</div>
        <FooterHelp>
          Learn more about the{' '}
          <Link url="https://vault.shopify.io/projects/6839">
            App Extension Render &amp; Execution Environment
          </Link>{' '}
          on Unicorn
        </FooterHelp>
      </Page>
    </AppProvider>
  );
}

export default App;
