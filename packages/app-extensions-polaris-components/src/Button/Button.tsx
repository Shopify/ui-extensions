import {Button as PolarisButton, ButtonProps} from '@shopify/polaris';
import React from 'react';

type ScarletButton = {
  label: string;
};

type CombinedProps = ButtonProps & ScarletButton;

export default function Button({label, ...args}: CombinedProps) {
  // @ts-ignore
  return <PolarisButton {...args}>{label}</PolarisButton>;
}
