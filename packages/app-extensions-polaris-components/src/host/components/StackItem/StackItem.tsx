import React from 'react';
import {Stack as PolarisStack} from '@shopify/polaris';

import {StackItemProps} from '../../../client/core';

export default function StackItem({children, fill}: StackItemProps) {
  return <PolarisStack.Item fill={fill}>{children}</PolarisStack.Item>;
}
