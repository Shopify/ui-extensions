import React, {useState, useCallback} from 'react';
import {createPlainWorkerFactory} from '@shopify/react-web-worker';
import {Page, Button, Card, Layout} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/argo-admin';

import {
  SubscriptionManagement,
  StandardContainer,
  SubscriptionManagmentProps,
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
}: Pick<SubscriptionManagmentProps<ExtensionPoint.Playground>, 'open' | 'onClose'>) {
  return (
    <SubscriptionManagement
      defaultTitle="Modal Extension Render Timeout"
      app={{
        title: 'OneMoreTime',
        id: 'one-more-time',
      }}
      script={reactThirdPartyWorker.url}
      extensionPoint={ExtensionPoint.Playground}
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
        <StandardContainer
          script={reactThirdPartyWorker.url}
          extensionPoint={ExtensionPoint.Playground}
        />
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
        <StandardContainer script={null} extensionPoint={ExtensionPoint.Playground} />
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
          <NoScriptExtension />
        </Layout.Section>
        <Layout.Section>
          <Button onClick={() => setModalOpen(true)}>Open subscription management modal</Button>
        </Layout.Section>
        <Layout.Section>
          <CardExtension />
        </Layout.Section>
        <ModalExtension open={modalOpen} onClose={onCloseModal} />
      </Layout>
    </Page>
  );
}
