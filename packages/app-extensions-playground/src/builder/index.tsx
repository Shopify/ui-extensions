import React from 'react';
import UIBuilder from '@shopify/app-extensions-ui-builder';

import {ComponentProps} from '@shopify/app-extensions-polaris-components/dist';

export default function Builder() {
  const componentList = [
    ComponentProps.ButtonProps,
    ComponentProps.TextfieldProps,
    ComponentProps.CheckboxProps,
    ComponentProps.CaptionProps,
    ComponentProps.BadgeProps,
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
