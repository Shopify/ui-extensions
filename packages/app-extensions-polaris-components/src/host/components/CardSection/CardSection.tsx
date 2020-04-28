import React from 'react';
import {Card} from '@shopify/polaris';

import {CardSectionProps} from '../../../client/core';

export default function CardSection({title, children}: CardSectionProps) {
  return <Card.Section title={title}>{children}</Card.Section>;
}
