import React from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {StackItem as ArgoStackItem} from '@shopify/argo-admin-react';
import {Stack as PolarisStack} from '@shopify/polaris';

type StackItemProps = ReactPropsFromRemoteComponentType<typeof ArgoStackItem>;

export default function StackItem({children, fill}: StackItemProps) {
  return <PolarisStack.Item fill={fill}>{children}</PolarisStack.Item>;
}

(StackItem as any).__type__ = PolarisStack.Item;
