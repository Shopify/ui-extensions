import React, {useState, useCallback} from 'react';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';
import {Page, Button, Card, Layout} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';

import {
  ProductSubscription,
  StandardContainer,
  ProductSubscriptionProps,
} from '../../components/containers';
import {ArgoHeader} from '../../components/containers/shared/Header';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-render-timeout' */ '../../third-party/render-timeout'),
);

const noop = () => {
  // Noop
};

export function ModalExtension({
  open,
  onClose,
}: Pick<ProductSubscriptionProps<'Playground'>, 'open' | 'onClose'>) {
  return (
    <ProductSubscription
      defaultTitle="Modal Extension Render Timeout"
      app={{
        title: 'OneMoreTime',
        id: 'one-more-time',
      }}
      script={reactThirdPartyWorker.url}
      extensionPoint="Playground"
      open={open}
      onClose={onClose}
      onDone={noop}
      setApp={noop}
    />
  );
}

export function CardExtension() {
  return (
    <Card>
      <Card.Section>
        <ArgoHeader name="OneMoreTime" title="Card Extension Render Timeout" />
      </Card.Section>
      <Card.Section>
        <StandardContainer script={reactThirdPartyWorker.url} extensionPoint="Playground" />
      </Card.Section>
    </Card>
  );
}

export function NoScriptExtension() {
  return (
    <Card>
      <Card.Section>
        <ArgoHeader name="OneMoreTime" title="Card Extension Script Not Found" />
      </Card.Section>
      <Card.Section>
        <StandardContainer script={null} extensionPoint="Playground" />
      </Card.Section>
    </Card>
  );
}

function UnsupportedComponent() {
  return (
    <Card>
      <Card.Section>
        <ArgoHeader name="OneMoreTime" title="Unsupported Component" />
      </Card.Section>
      <Card.Section>
        <StandardContainer
          script={reactThirdPartyWorker.url}
          extensionPoint="Admin::Product::SubscriptionPlan::Remove"
        />
      </Card.Section>
    </Card>
  );
}

export function RenderError() {
  usePerformanceMark('complete', 'RenderError');

  const [modalOpen, setModalOpen] = useState(false);
  const onCloseModal = useCallback(() => setModalOpen(false), [setModalOpen]);

  return (
    <Page title="Render Error">
      <Layout>
        <Layout.Section>
          <UnsupportedComponent />
        </Layout.Section>
        <Layout.Section>
          <Button onClick={() => setModalOpen(true)}>Open product subscription modal</Button>
        </Layout.Section>
        <Layout.Section>
          <CardExtension />
        </Layout.Section>
        <Layout.Section>
          <NoScriptExtension />
        </Layout.Section>
        <ModalExtension open={modalOpen} onClose={onCloseModal} />
      </Layout>
    </Page>
  );
}
