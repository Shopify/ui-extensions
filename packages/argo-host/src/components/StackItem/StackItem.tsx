import React from 'react';
import {StackItemProps} from '@shopify/argo/components';
import {Stack as PolarisStack} from '@shopify/polaris';

export default function StackItem({children, fill}: StackItemProps) {
  return <PolarisStack.Item fill={fill}>{children}</PolarisStack.Item>;
}
