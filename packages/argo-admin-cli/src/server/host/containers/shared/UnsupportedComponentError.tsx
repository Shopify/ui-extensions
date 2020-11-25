import React from 'react';
import {Card, EmptyState} from '@shopify/polaris';

import EmptyStateIllustration from './empty-state-illustration.raw.svg';

export function UnsupportedComponentError() {
  return (
    <Card sectioned>
      <EmptyState
        heading="Couldn't render your app extension"
        image={EmptyStateIllustration}
        fullWidth
      >
        Check the console for errors.
      </EmptyState>
    </Card>
  );
}
