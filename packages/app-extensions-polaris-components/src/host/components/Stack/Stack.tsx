import {Stack as PolarisStack} from '@shopify/polaris';
import React, {useMemo} from 'react';

import {StackProps} from '../../../client/core';
import {elementChildren, getElementProps, isElementOfType} from '../../utilities/components';
import StackItem from '../StackItem';

export default function Stack({children, ...props}: StackProps) {
  const itemMarkup = useMemo(
    () =>
      elementChildren(children).map((child, index) => {
        if (isElementOfType(child, StackItem)) {
          return (
            <PolarisStack.Item key={index} {...getElementProps(child)}>
              {child}
            </PolarisStack.Item>
          );
        }
        return child;
      }),
    [children],
  );
  return <PolarisStack {...props}>{itemMarkup}</PolarisStack>;
}
