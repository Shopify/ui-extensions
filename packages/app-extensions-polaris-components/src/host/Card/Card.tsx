import {Card as PolarisCard, CardProps, FormLayout} from '@shopify/polaris';
import React from 'react';

interface Action {
  text: string;
  destructive?: boolean;
  onPress: () => void;
}

interface CardProps {
  title?: string;
  primaryFooterAction?: Action;
  secondaryFooterActions?: Action[];
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  return <PolarisCard {...props} />;
}
