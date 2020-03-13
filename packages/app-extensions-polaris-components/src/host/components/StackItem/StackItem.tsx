import {Stack as PolarisStack} from '@shopify/polaris';
import React from 'react';

import {StackItemProps} from '../../../client/core';

export default function StackItem(props: StackItemProps) {
  return <PolarisStack.Item {...props} />;
}
