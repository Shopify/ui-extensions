import {Checkbox as PolarisCheckbox} from '@shopify/polaris';
import React from 'react';

import {CheckboxProps} from '../../../client/core';

export default function Checkbox(props: CheckboxProps) {
  return <PolarisCheckbox {...props} />;
}
