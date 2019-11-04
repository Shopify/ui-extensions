import React from 'react';
import UIBuilder from '@shopify/app-extensions-ui-builder';
import Button from '@shopify/app-extensions-polaris-components/dist/Button/props';
import TextField from '@shopify/app-extensions-polaris-components/dist/Textfield/props';
import Checkbox from '@shopify/app-extensions-polaris-components/dist/Checkbox/props';
import Caption from '@shopify/app-extensions-polaris-components/dist/Caption/props';
import Badge from '@shopify/app-extensions-polaris-components/dist/Badge/props';

export default function Builder() {
  const componentList = [
    Button.componentType,
    TextField.componentType,
    Checkbox.componentType,
    Caption.componentType,
    Badge.componentType,
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
