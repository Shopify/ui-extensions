import React from 'react';
import {Stack as PolarisStack} from '@shopify/polaris';

import {StackItemProps} from '../../../client/core';

export default function StackItem(props: StackItemProps) {
  return <PolarisStack.Item {...props} />;
}
