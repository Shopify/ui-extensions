import {Card as PolarisCard} from '@shopify/polaris';
import React from 'react';

import {CardProps} from '../../../client/core';

export default function Card(props: CardProps) {
  return <PolarisCard {...props} />;
}
