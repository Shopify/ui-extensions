import React, {useState, useCallback} from 'react';
import {createPlainWorkerFactory} from '@shopify/web-worker';
import {Page, Button, Card, Layout} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {components} from '@shopify/argo-host';
import {ExtensionPoint} from '@shopify/argo';

import {ModalContainer, StandardContainer, ModalContainerProps} from '../../components/containers';
import {ArgoHeader} from '../../components/containers/shared/Header';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-render-timeout' */ '../../third-party/render-timeout'),
);

export function ModalExtension({
  open,
  onClose,
}: Pick<ModalContainerProps<ExtensionPoint.Playground>, 'open' | 'onClose'>) {
  return (
    <ModalContainer
      defaultTitle="Modal Extension"
      app={{
        name: 'OneMoreTime',
        id: 'one-more-time',
      }}
      script={reactThirdPartyWorker.url}
      extensionPoint={ExtensionPoint.Playground}
      components={components}
      open={open}
      onClose={onClose}
    />
  );
}

export function CardExtension() {
  return (
    <Card>
      <Card.Section>
        <ArgoHeader appName="OneMoreTime" title="Card Extension" />
      </Card.Section>
      <Card.Section>
        <StandardContainer
          script={reactThirdPartyWorker.url}
          extensionPoint={ExtensionPoint.Playground}
          components={components}
        />
      </Card.Section>
    </Card>
  );
}

export function RenderTimeout() {
  usePerformanceMark('complete', 'RenderTimeout');

  const [modalOpen, setModalOpen] = useState(false);
  const onCloseModal = useCallback(() => setModalOpen(false), [setModalOpen]);

  return (
    <Page title="Render Timeout">
      <Layout>
        <Layout.Section>
          <CardExtension />
        </Layout.Section>
        <ModalExtension open={modalOpen} onClose={onCloseModal} />
        <Layout.Section>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
