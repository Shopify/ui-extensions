import React from 'react';
import {Card, Stack, StackItem, VisuallyHidden} from '@shopify/argo-admin-react';

export function VisuallyHiddenExample() {
  return (
    <Card sectioned title="VisuallyHidden component">
      <Stack vertical>
        <StackItem>Inspect or use screen reader to see "Hidden Text"</StackItem>
        <StackItem>
          Visible Text
          <VisuallyHidden>Hidden Text</VisuallyHidden>
        </StackItem>
      </Stack>
    </Card>
  );
}
