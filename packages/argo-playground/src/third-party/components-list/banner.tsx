import React, {useCallback} from 'react';
import {Card, Stack, Banner} from '@shopify/argo-react/components';

export function BannerExample() {
  const bannerDismissCallback = useCallback(() => console.log('Dismiss banner'), []);
  const bannerActionCallback = useCallback(() => console.log('Action Clicked'), []);

  return (
    <Card sectioned title="Banner component">
      <Stack>
        <Banner title="Regular Banner" onDismiss={bannerDismissCallback}>
          Some super cool content for you in a banner. This is important stuff. Read this or you
          will not know the joys of knowing more about what this banner has to inform you of.
        </Banner>
        <Banner title="Critical Banner" status="critical" onDismiss={bannerDismissCallback}>
          Some super cool content for you in a banner. This is important stuff. Read this or you
          will not know the joys of knowing more about what this banner has to inform you of.
        </Banner>
        <Banner title="Info Banner" status="info" onDismiss={bannerDismissCallback}>
          Some super cool content for you in a banner. This is important stuff. Read this or you
          will not know the joys of knowing more about what this banner has to inform you of.
        </Banner>
        <Banner title="Success Banner" status="success" onDismiss={bannerDismissCallback}>
          Some super cool content for you in a banner. This is important stuff. Read this or you
          will not know the joys of knowing more about what this banner has to inform you of.
        </Banner>
        <Banner title="Warning Banner" status="warning" onDismiss={bannerDismissCallback}>
          Some super cool content for you in a banner. This is important stuff. Read this or you
          will not know the joys of knowing more about what this banner has to inform you of.
        </Banner>
        <Banner
          title="Action Banner"
          action={{content: 'Click me', onAction: bannerActionCallback}}
          onDismiss={bannerDismissCallback}
        >
          Some super cool content for you in a banner. This is important stuff. Read this or you
          will not know the joys of knowing more about what this banner has to inform you of.
        </Banner>
      </Stack>
    </Card>
  );
}
