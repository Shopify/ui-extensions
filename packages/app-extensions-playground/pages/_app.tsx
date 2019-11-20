import {AppProvider, FooterHelp, Link, Page, Stack} from '@shopify/polaris';
import styled from 'styled-components';
import React from 'react';
import Head from 'next/head';

const PageContainer = styled.div`
  margin-top: 16px;
`;

function App({Component, pageProps}: {Component: any; pageProps: any}) {
  const page = <Component {...pageProps} />;

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
    <>
      <Head>
        <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/3.21.0/polaris.min.css" />
        <link href="/static/themes/prism.css" rel="stylesheet" />
      </Head>
      <AppProvider i18n={{}}>
        <Page fullWidth title="App Extensions Playground">
          <Stack vertical>
            <PageContainer>{page}</PageContainer>
            <Footer />
          </Stack>
        </Page>
      </AppProvider>
    </>
  );
}

export default App;
