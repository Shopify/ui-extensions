import React from 'react';
import UIBuilder from '@shopify/app-extensions-ui-builder';

export default function Builder() {
  return (
    <UIBuilder
      name="Example Extension"
      primaryAction={{
        label: 'Review',
      }}
      secondaryAction={{
        label: 'Save',
      }}
    />
  );
}
