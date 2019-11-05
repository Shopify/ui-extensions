import React from 'react';
import UIBuilder from '@shopify/app-extensions-ui-builder';

import {ComponentDefinitions} from '@shopify/app-extensions-polaris-components/dist';

export default function Builder() {
  const componentList = [
    ComponentDefinitions.Button,
    ComponentDefinitions.Textfield,
    ComponentDefinitions.Checkbox,
    ComponentDefinitions.Caption,
    ComponentDefinitions.Badge,
  ];

  return (
    <UIBuilder
      name="Example Extension"
      primaryAction={{
        label: 'Review',
      }}
      secondaryAction={{
        label: 'Save',
      }}
      componentList={componentList}
    />
  );
}
