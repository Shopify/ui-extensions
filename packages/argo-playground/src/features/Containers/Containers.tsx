import React, {useState, useMemo, useCallback} from 'react';
import {ExtensionPoint} from '@shopify/argo';
import {useDataApi, useToastApi} from '@shopify/argo-host';
import {Badge, Card, Layout, Link, Page, Stack, TextField} from '@shopify/polaris';

import {SubscriptionManagement} from '../../components/containers';

export function Containers() {
  const [showModal, setShowModal] = useState(false);
  const [currentExtensionPoint, setCurrentExtensionPoint] = useState<ExtensionPoint>();

  const dataApi = useDataApi<ExtensionPoint.SubscriptionManagementCreate>({
    productId: '1',
    done: () => {},
  });
  const [Toast, toastApi] = useToastApi();

  const title = useMemo(() => {
    switch (currentExtensionPoint) {
      case ExtensionPoint.SubscriptionManagementRemove:
        return 'Remove Subscription Plan';
      default:
        return 'Edit Subscription Plan';
    }
  }, [currentExtensionPoint]);

  const api = useMemo(() => {
    return {...toastApi, ...dataApi};
  }, [dataApi, toastApi]);

  const onClose = useCallback(() => setShowModal(false), []);
  const onDone = useCallback(() => console.log('Done'), []);

  return (
    <>
      <Page title="Host Containers" primaryAction={{content: 'Epic Action'}}>
        <Layout>
          <Layout.Section>
            <Card sectioned title="Some form" primaryFooterAction={{content: 'Submit'}}>
              <TextField label="Some field" value="" onChange={() => {}} />
              <TextField label="Some other field" value="" onChange={() => {}} />
              <TextField label="Yet another field" multiline value="" onChange={() => {}} />
            </Card>
            <Card title="Subscription Management">
              <Card.Section key="first-modal-trigger">
                <Stack distribution="fillEvenly">
                  <div>Information about a thing.</div>
                  <div>
                    Coolness percent: <strong>67%</strong>
                  </div>
                  <div>
                    <Stack distribution="trailing">
                      <Link
                        onClick={() => {
                          setCurrentExtensionPoint(ExtensionPoint.SubscriptionManagementRemove);
                          setShowModal(true);
                        }}
                      >
                        Remove
                      </Link>
                      <Link
                        onClick={() => {
                          setCurrentExtensionPoint(ExtensionPoint.SubscriptionManagementEdit);
                          setShowModal(true);
                        }}
                      >
                        Edit
                      </Link>
                    </Stack>
                  </div>
                </Stack>
              </Card.Section>
              <Card.Section key="second-modal-trigger">
                <Stack distribution="fillEvenly">
                  <div>More info about other things</div>
                  <div>
                    Coolness percent: <strong>89%</strong>
                  </div>
                  <div>
                    <Stack distribution="trailing">
                      <Link>Remove</Link>
                      <Link>Edit</Link>
                    </Stack>
                  </div>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneThird>
            <Card
              sectioned
              title="Side bar card one"
              primaryFooterAction={{
                content: 'Do something',
              }}
            >
              Here is some information for the side bar in case you needed it.
            </Card>
            <Card sectioned title="Side bar card two">
              {[1, 2, 3].map((i) => (
                <Card.Section key={i}>
                  <Stack distribution="fill">
                    <div>Some cool text</div>
                    <Badge status="success">{String(i)}</Badge>
                  </Stack>
                </Card.Section>
              ))}
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
      <SubscriptionManagement
        open={showModal}
        defaultTitle={title}
        onClose={onClose}
        onDone={onDone}
        extensionPoint={currentExtensionPoint!}
        api={api}
        height="450px"
      />
      <Toast />
    </>
  );
}
