import React, {useCallback} from 'react';
import {Card, Stack, Link} from '@shopify/argo-admin';

export function LinkExample() {
  const linkAction = useCallback(() => {
    console.log('Link clicked');
  }, []);

  return (
    <Card sectioned title="Link">
      <Stack>
        <Link url="/product-reviews">Link to Product Reviews</Link>
        <Link url="/product-reviews" external>
          Link to Product Reviews in new tab
        </Link>
        <Link onClick={linkAction}>Link that triggers log</Link>
      </Stack>
    </Card>
  );
}
