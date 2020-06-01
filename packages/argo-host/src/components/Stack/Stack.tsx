import React from 'react';
import {StackProps} from '@shopify/argo';
import {Stack as PolarisStack} from '@shopify/polaris';

export default function Stack({
  children,
  alignment,
  distribution,
  spacing,
  vertical,
  wrap,
}: StackProps) {
  return (
    <PolarisStack
      alignment={alignment}
      distribution={distribution}
      spacing={spacing}
      vertical={vertical}
      wrap={wrap}
    >
      {children}
    </PolarisStack>
  );
}
