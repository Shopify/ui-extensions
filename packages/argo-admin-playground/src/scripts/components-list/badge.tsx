import React from 'react';
import {Card, Stack, Badge} from '@shopify/argo-admin-react';

export function BadgeExample() {
  return (
    <Card sectioned title="Badge component">
      <Stack>
        <Badge message="Published" />
        <Badge message="Published" status="attention" />
        <Badge message="Published" status="info" />
        <Badge message="Published" status="new" />
        <Badge message="Published" status="success" />
        <Badge message="Published" status="warning" />
      </Stack>
    </Card>
  );
}
