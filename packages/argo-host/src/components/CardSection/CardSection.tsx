import React from 'react';
import {CardSectionProps} from '@shopify/argo/components';
import {Card} from '@shopify/polaris';

export default function CardSection({title, children}: CardSectionProps) {
  return <Card.Section title={title}>{children}</Card.Section>;
}
