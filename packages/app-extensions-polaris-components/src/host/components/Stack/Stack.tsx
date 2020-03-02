import {Stack as PolarisStack} from '@shopify/polaris';
import React from 'react';

import {StackProps} from '../../../client/core';

export default function Stack(props: StackProps) {
  return <PolarisStack {...props} />;
}
