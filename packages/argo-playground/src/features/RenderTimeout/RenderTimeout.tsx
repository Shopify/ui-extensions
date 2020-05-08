import React, {useState, useEffect, useMemo} from 'react';
import {createPlainWorkerFactory} from '@shopify/web-worker';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {components} from '@shopify/argo-host';
import {ExtensionPoint} from '@shopify/argo';
import {useRenderTimeout} from '@shopify/argo-host';
import {RemoteReceiver} from '@shopify/remote-ui-react/host';

import {StandardContainer} from '../../components/containers';
import {RenderErrorModal} from './RenderErrorModal';

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: '3p-render-timeout' */ '../../third-party/render-timeout'),
);

export function RenderTimeout() {
  usePerformanceMark('complete', 'RenderTimeout');

  const [receiver, isRenderTimedOut] = useRenderTimeout(
    useMemo(() => new RemoteReceiver(), []),
    5000,
  );
  const [renderTimeoutModalOpen, setRenderTimeoutModalOpen] = useState(isRenderTimedOut);
  useEffect(() => {
    setRenderTimeoutModalOpen(isRenderTimedOut);
  }, [isRenderTimedOut]);

  return (
    <Page title="Render Timeout">
      <StandardContainer
        script={reactThirdPartyWorker.url}
        extensionPoint={ExtensionPoint.Playground}
        components={components}
        receiver={receiver}
      />
      <RenderErrorModal
        open={renderTimeoutModalOpen}
        onClose={() => setRenderTimeoutModalOpen(false)}
      />
    </Page>
  );
}
