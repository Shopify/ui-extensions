import {AppProvider, FooterHelp, Link, Page, Stack} from '@shopify/polaris';
import {useRedirect, useRoutes} from 'hookrouter';
import UIBuilder from '@shopify/app-extensions-ui-builder';
import styled from 'styled-components';
import React from 'react';
import Home from './home';
import Repl from './repl';

const routes = {
  '/': () => <Home />,
  '/builder': () => <UIBuilder />,
  '/repl/:id': ({id}: {id: string}) => <Repl snippetId={parseInt(id, 10)} />,
};

const PageContainer = styled.div`
  margin-top: 16px;
`;

function App() {
  useRedirect('/repl', '/repl/0');
  const page = useRoutes(routes);

  const Footer = () => (
    <FooterHelp>
      Learn more about the{' '}
      <Link url="https://vault.shopify.io/projects/6839">
        App Extension Render &amp; Execution Environment
      </Link>{' '}
      on Unicorn
    </FooterHelp>
  );

  return (
    <AppProvider i18n={{}}>
      <Page fullWidth title="App Extensions Playground">
        <Stack vertical>
          <PageContainer>{page}</PageContainer>
          <Footer />
        </Stack>
      </Page>
    </AppProvider>
  );
}

export default App;
