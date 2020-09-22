import React, {useState, useMemo, useCallback} from 'react';
import {DataApi, ExtensionPoint} from '@shopify/argo-admin';
import {useToastApi} from '@shopify/argo-admin-host';
import {Card, Link, Stack, Button} from '@shopify/polaris';

import {App} from '../StandardContainer';

import {SubscriptionManagement, apps} from './SubscriptionManagement';

export function SubscriptionPlansCard() {
  const [showExtension, setShowExtension] = useState(false);
  const [currentExtensionPoint, setCurrentExtensionPoint] = useState<ExtensionPoint>();

  const dataApi: DataApi<'Admin::Product::SubscriptionPlan::Create'> = useMemo(
    () => ({data: {productId: '1'}}),
    [],
  );
  const [Toast, toastApi] = useToastApi();

  const title = useMemo(() => {
    switch (currentExtensionPoint) {
      case 'Admin::Product::SubscriptionPlan::Add':
        return 'Add Subscription Plan';
      case 'Admin::Product::SubscriptionPlan::Edit':
        return 'Edit Subscription Plan';
      case 'Admin::Product::SubscriptionPlan::Remove':
        return 'Remove Subscription Plan';
      default:
        return 'Create Subscription Plan';
    }
  }, [currentExtensionPoint]);

  const api = useMemo(() => {
    return {...toastApi, ...dataApi};
  }, [dataApi, toastApi]);

  const [app, setApp] = useState<App | undefined>();
  const onClose = useCallback(() => setShowExtension(false), []);
  const onDone = useCallback(() => console.log('Done'), []);

  return (
    <>
      <Card title="Subscription Management">
        {Object.values(apps).map(({id, title}) => {
          return (
            <Card.Section key={id}>
              <Stack distribution="fillEvenly">
                <Stack.Item>Information about {title}</Stack.Item>
                <Stack.Item>
                  <Stack distribution="trailing">
                    <Link
                      onClick={() => {
                        setCurrentExtensionPoint('Admin::Product::SubscriptionPlan::Remove');
                        setApp(apps[id]);
                        setShowExtension(true);
                      }}
                    >
                      Remove
                    </Link>
                    <Link
                      onClick={() => {
                        setCurrentExtensionPoint('Admin::Product::SubscriptionPlan::Edit');
                        setApp(apps[id]);
                        setShowExtension(true);
                      }}
                    >
                      Edit
                    </Link>
                  </Stack>
                </Stack.Item>
              </Stack>
            </Card.Section>
          );
        })}
        <Card.Section>
          <Stack alignment="center">
            <Button
              outline
              onClick={() => {
                setCurrentExtensionPoint('Admin::Product::SubscriptionPlan::Create');
                setShowExtension(true);
              }}
            >
              Create subscription plan
            </Button>
            <Link
              onClick={() => {
                setCurrentExtensionPoint('Admin::Product::SubscriptionPlan::Add');
                setShowExtension(true);
              }}
            >
              Add existing plan
            </Link>
          </Stack>
        </Card.Section>
      </Card>
      <SubscriptionManagement
        open={showExtension}
        defaultTitle={title}
        onClose={onClose}
        onDone={onDone}
        extensionPoint={currentExtensionPoint!}
        api={api}
        height={450}
        app={app}
        setApp={setApp}
      />
      <Toast />
    </>
  );
}
